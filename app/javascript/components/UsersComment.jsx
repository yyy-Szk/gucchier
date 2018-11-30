import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import CommentList from './CommentList'
import NewComment from './NewComment'

class UsersComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      comments: []
    };
  }

  render() {
    return(
      <div>
        <NewComment submit={e => this.commentSubmit(e)} contentChange={e => this.handleContentChange(e.target.value)} content={this.state.content} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }


   componentDidMount() {
    axios.get('/api/v1/comments', {
      params: {
        id: this.props.room_id
      }
    })
    .then ( response => {
      this.setState({
        comments: response.data
      })
    })
  }

  handleContentChange(content) {
    this.setState({content});
  }
  //
  commentSubmit(e) {
    e.preventDefault();

    axios.post('/comments/new', {comment: {room_id: this.props.room_id, content: this.state.content}})
      .then( response => {
        axios.get('/api/v1/comments', {params: {id: this.props.room_id}})
        .then ( response => {
          this.setState({
            content: '',
            comments: response.data
          })
        })
      })
      .catch(error => {
        console.log('error!!!');
      }
    );
  }
}

export default UsersComment

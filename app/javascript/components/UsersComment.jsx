import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

// import ThreadList from '../components/ThreadList'
// import MakeThread from '../components/MakeThread'

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
        <div className='text-center'>
          <h2 className="text-white">コメントをする</h2>
          <form onSubmit={e => this.commentSubmit(e)}>
            <div className="field">
              <input type='text' onClick={e => this.handleContentChange(e.target.value)}/>
            </div>
            <input type="submit" value="送信" />
          </form>
        </div>

        <div style={{borderTop: '3px solid #ffffff', margin: 50, paddingBottom: 30}}>
          <div className="mrg-top-s text-white">

            { this.state.comments.map((comment) =>
              <div key={comment.id}>
                <p className="text-white" style={{margin: '20px 0', paddingLeft: 20, fontSize: 26}}>No. {comment.user_id}さん　｜　{comment.created_at}</p>
                <p style={{paddingLeft: 30, fontSize: 20}}>{comment.content}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }



   componentDidMount() {
    axios.get('/api/v1/comments')
    .then ( (response) => {
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

    axios.post('/comments/new', {comment: {room_id: this.state.first.data.room_id, content: this.state.content}})
      .then(response => {
        axios.get('/api/v1/comments')
        .then ( (response) => {
          this.setState({
            content: '',
            timeline: response.data
          })
        })
      })
      .catch(error => {
      console.log('error!!!');
      });
    }
}

export default UsersComment

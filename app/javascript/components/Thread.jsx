import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

import ThreadList from '../components/ThreadList'
import MakeThread from '../components/MakeThread'

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      timeline: []
    };
  }

  render() {
    // 逆向きに入れ替える
    let tweets = []
    this.state.timeline.map((tweet) =>
      tweets.unshift(tweet)
    )
    return(
      <React.Fragment>

        <MakeThread
          title={this.state.title}
          content={this.state.content}
          changeTitle={e => this.handleTitleChange(e.target.value)}
          changeContent={e => this.handleContentChange(e.target.value)}
          submit={e => this.threadSubmit(e)}
        />
        <ThreadList tweets={tweets}/>

      </React.Fragment>
    );

  }



  componentDidMount() {
    axios.get('/api/v1/rooms')
    .then ( response => {
      this.setState({
        timeline: response.data
      })
    })
  }

  handleTitleChange(title) {
    this.setState({title});
  }

  handleContentChange(content) {
    this.setState({content});
  }

  threadSubmit(e) {
    e.preventDefault();

    axios.post('/rooms', {room: {title: this.state.title, content: this.state.content}})
      .then( response => {
        axios.get('/api/v1/rooms')
        .then ( response => {
          this.setState({
            timeline: response.data,
            title: '',
            content: ''
          })
        })
      })
      .catch(error => {
      console.log('error!!!');
      }
    );
  }
}

export default Thread

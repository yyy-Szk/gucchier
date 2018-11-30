import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function ThreadList(props) {

  return (
    <div>
      { props.tweets.map((tweet) =>
        <a key={tweet.id} href={`/rooms/${tweet.id}?content=${tweet.content}`}>
          <div className='text-white' style={{border: '1px solid #565656', margin: '40px auto', width: '500px', padding: '0 40px', background: '#3f729b', borderRadius: 10}}>
            <h3>{tweet.title}</h3>
          </div>
        </a>
      )}
    </div>
  );
}

ThreadList.propTypes = {
  tweets: PropTypes.array
};

ThreadList.defaultProps = {
  tweets: []
};

export default ThreadList

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function CommentList(props) {
  return (
    <div style={{borderTop: '3px solid #ffffff', margin: 50, paddingBottom: 30}}>
      <div className="mrg-top-s text-white">

        { props.comments.map((comment) =>
          <div key={comment.id}>
            <p className="text-white" style={{margin: '20px 0', paddingLeft: 20, fontSize: 26}}>No. {comment.user_id}さん　｜　{comment.created_at}</p>
            <p style={{paddingLeft: 30, fontSize: 20}}>{comment.content}</p>
          </div>
        )}

      </div>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array
};

CommentList.defaultProps = {
  comments: []
};

export default CommentList

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function NewComment(props) {
  return (
    <div className='text-center'>
      <h2 className="text-white">コメントをする</h2>
      <form onSubmit={props.submit}>
        <div className="field">
          <input type='text' value={props.content} onChange={props.contentChange}/>
        </div>
        <input type="submit" value="送信" />
      </form>
    </div>
  );
}

NewComment.propTypes = {
  submit: PropTypes.func,
  content: PropTypes.string,
  contentChange: PropTypes.func
};

NewComment.defaultProps = {
  content: ''
};

export default NewComment

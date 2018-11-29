import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function MakeThread(props) {

  return (
    <div className='sousin' style={{marginBottom: 60}}>
      <h2>スレッドを立てる</h2>
      <form onSubmit={props.submit}>
        <div>
          タイトル:<br />
          <input type="text" style={{width: 350}} value={props.title} onChange={props.changeTitle} />
        </div>
        <br />
        <div>
        コンテンツ:<br />
          <input type="text" style={{width: 350}} value={props.content} onChange={props.changeContent} />
        </div>
        <br />
        <input type="submit" value="送信" />
      </form>
    </div>
  );
}

MakeThread.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  submit: PropTypes.func,
  changeTitle: PropTypes.func,
  changeContent: PropTypes.func
};

export default MakeThread

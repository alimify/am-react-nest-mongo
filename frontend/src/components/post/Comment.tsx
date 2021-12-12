import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThumbImage from '../../images/no_thumbnail.png'
import CommentMain from './CommentMain';
import SubComment from './SubComment';

const Comment : React.FunctionComponent<{comment: any,setCommentId: any}>   = (props) => {

  const comment = props.comment;
  const [getReply,setReply] = useState(false);

  return (
      <div className="m-2"><CommentMain setCommentId={props.setCommentId} comment={comment} reply={setReply}/> {getReply?<SubComment main_comment={comment} setCommentId={props.setCommentId}/>:''}</div>
  );
}

export default Comment;
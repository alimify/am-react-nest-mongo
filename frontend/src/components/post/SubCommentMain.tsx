import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThumbImage from '../../images/no_thumbnail.png'
import SubComment1 from './SubComment1';
import SubCommentMainMain from './SubCommentMainMain';

const SubCommentMain : React.FunctionComponent<{comment: any, setCommentId: any}>   = (props) =>  {

  const [getSubComment,setSubComment] = useState(false);


  return (
        <div>

          <SubCommentMainMain comment={props.comment} reply={setSubComment} setCommentId={props.setCommentId}/>
          {getSubComment ? <SubComment1 main_comment={props.comment} setCommentId={props.setCommentId}/> : ''}

        </div>
  );
}

export default SubCommentMain;
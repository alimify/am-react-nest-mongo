import React, { useState } from 'react';
import SubComment from './SubComment';
import SubCommentMainMain from './SubCommentMainMain';

const SubComment1Main : React.FunctionComponent<{comment: any, setCommentId: any}>   = (props) =>  {

    const [getSubComment,setSubComment] = useState(false);

  return (
        <div>
          <SubCommentMainMain comment={props.comment} reply={setSubComment} setCommentId={props.setCommentId}/>
          {getSubComment ? <SubComment main_comment={props.comment} setCommentId={props.setCommentId}/> : ''}
        </div>
  );
}

export default SubComment1Main;
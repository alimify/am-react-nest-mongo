import React from 'react';
import { Link } from 'react-router-dom';
import ThumbImage from '../../images/no_thumbnail.png'

const CommentMain : React.FunctionComponent<{comment: any,reply: any, setCommentId: any}>   = (props) => {

  const comment = props.comment;

  return (
    <div className="p-3 border">
        <div className="flex">
             <div className="p-1">
                <img className="rounded-full h-10 w-10 flex items-center justify-center" src={ThumbImage}/>
             </div>
             <div className="px-3 py-1">
                <a href="#" className="text-blue-900 font-semibold block">{comment.username}</a>
                <span className="text-gray-400">{comment.created_at}</span>
             </div>
        </div>

        <div>

           {comment.content}

        </div>

        <div className="pt-3">
            <a href="#" onClick={() => {
                props.reply(true)
                props.setCommentId(comment._id)
            }} className="text-blue-900">Reply</a>
        </div>
    </div>
  );
}

export default CommentMain;
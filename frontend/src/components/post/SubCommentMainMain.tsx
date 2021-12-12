import React from 'react';
import { Link } from 'react-router-dom';
import ThumbImage from '../../images/no_thumbnail.png'

const SubCommentMainMain : React.FunctionComponent<{comment: any, reply: any, setCommentId: any}>   = (props) => {
    

  return (
        <div className="bg-blue-50 pl-3 mt-3">
                <div className="flex">
                    <div className="p-1">
                        <img className="rounded-full h-10 w-10 flex items-center justify-center" src={ThumbImage}/>
                    </div>
                    <div className="px-3 py-1">
                        <a href="#" className="text-blue-900 font-semibold block">{props.comment.username}</a>
                        <span className="text-gray-400">{props.comment.created_at}</span>
                    </div>
                </div>

                <div>
                    {props.comment.content}
                </div>

                <div className="pt-3">
                    <a onClick={() => {props.reply(true); props.setCommentId(props.comment._id)}} href="#" className="text-blue-900">Reply</a>
                </div>
        </div>
  );
}

export default SubCommentMainMain;
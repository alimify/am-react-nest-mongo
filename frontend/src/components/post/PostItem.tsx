import React from 'react';
import { Link } from 'react-router-dom';
import ThumbImage from '../../images/no_thumbnail.png'

const PostItem : React.FunctionComponent<{post: any}>   = (props) => {

  const post = props.post;

  return (
    <Link to={'/post/'+post._id}>
      <div className="m-2 border">
        <div>
          <img src={ThumbImage}/>
        </div>
        <div className="p-2">
          <span className="font-semibold hover:text-blue-600">{post.title}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
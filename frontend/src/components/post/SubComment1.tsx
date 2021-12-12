import React, { useState } from 'react';
import SubComment1Main from './SubComment1Main';
import { useGetCommentByCommentQuery } from '../../redux/services/comment';

const SubComment1 : React.FunctionComponent<{main_comment: any, setCommentId: any}>   = (props) =>  {

  const {data,isLoading,isError} = useGetCommentByCommentQuery(props.main_comment._id);

  if(!data)
      return (<div></div>);


  return (
    <div className="border pl-3 ml-3">

      {data.map((item :any ,key: any) => {
        return (
        <SubComment1Main key={key} comment={item} setCommentId={props.setCommentId}/>
        );
      })}

    </div>
  );
}

export default SubComment1;
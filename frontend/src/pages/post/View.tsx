import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Comment from '../../components/post/Comment'
import { useGetCommentByPostQuery, useStoreCommentMutation, commentApi } from '../../redux/services/comment';
import { useGetPostQuery } from '../../redux/services/post';

function PostView() {

  const dispatch = useDispatch();
  const { postID } = useParams();
  const {data,isLoading,isError} = useGetPostQuery(postID);
  const [storeComment,responseInfo] = useStoreCommentMutation();



  const comment = useGetCommentByPostQuery({
    post_id: postID,
    page: 1,
    per_page: 10
  });

  

  const [getCommentContent,setCommentContent] = useState('');
  const [getCommentUsername,setCommentUsername] = useState('');
  const [getCommentId,setCommentId] = useState(null);

  if(!data || !comment.data){
    return (    <div className="w-4/6 mx-auto">
      <div className="main-view w-4/6">
        <div className="loading-view"><div className="text-center p-20">Loading...</div></div></div></div>);
  }

  const comments = comment.data.comments;



  return (
   
    <div className="w-4/6 mx-auto">


      <div className="main-view w-4/6">

        <div className="details-view">

              <h1 className="font-bold text-3xl">{data.title}</h1>
              <span className="text-gray-500 font-small">{data.created_at}</span>
              <div className="mt-5 text-gray-800">
                      {data.content}
              </div>

        </div>

        <div className="border px-5 py-2 mt-5">
          <h1 className="font-bold">Add Comment - {getCommentId}</h1>
          <input type="text" value={getCommentUsername} placeholder="Name" onChange={(e)=> setCommentUsername(e.target.value)} className="border-2 p-1 w-full mt-2"/>
          <textarea className="border-2 p-1 w-full mt-3" onChange={(e)=> setCommentContent(e.target.value)} value={getCommentContent} placeholder="Comment"></textarea>
          <div className="my-4">
          <button
              type="submit"
              onClick={async () => {
                await storeComment({
                  content: getCommentContent,
                  username: getCommentUsername,
                  post_id: getCommentId?null:postID,
                  comment_id: getCommentId,
                  created_at: new Date()
                })
                setCommentUsername('')
                setCommentContent('')
                setCommentId(null)

                console.log(responseInfo.isSuccess)

                if(getCommentId){

                  console.log(getCommentId)

                  dispatch(commentApi.endpoints.getCommentByComment.initiate(getCommentId,{
                    subscribe: false,
                    forceRefetch: true
                  }))

                }else {
                  console.log('we wait')
                  comment.refetch()
                }
                
                
              }}
              className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
              Submit
          </button>

          </div>
        </div>

      </div>


      <div className="comment-view w-4/6">

        {comments.map((item: any,key: any) => {
          return (<Comment key={key} comment={item} setCommentId={setCommentId}/>)
        })}


      </div>

      <div>



        
      </div>

    </div>
  );
}

export default PostView;
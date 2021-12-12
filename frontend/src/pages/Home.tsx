import React, { useState } from 'react';
import PostItem from '../components/post/PostItem';
import Modal from '../components/home/Modal';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/post_modal';
import { postApi, useGetPostsQuery } from '../redux/services/post';
import ReactPaginate from 'react-paginate';

function Home() {

  const [page,setPage] = useState(1)

  const {data, error, isLoading} = useGetPostsQuery({
    page: page,
    per_page: 8
  });

  const dispatch = useDispatch();

  return (
    <div className="w-4/6 mx-auto">
      <Modal/>
      <div className="mb-2 right">
        <a href="#" onClick={() => dispatch(toggle())} className="bg-green-500 px-10 py-2 font-bold text-white">Add Post</a>
      </div>
      <div>

        <div className="grid grid-cols-4 gap-2">
          {data ? data.posts.map((post : any,key : any) => <PostItem post={post} key={key}/>) : ''}
        </div>

    
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => {
          console.log(event)

          setPage(event.selected + 1)
          

        }}
        pageRangeDisplayed={5}
        pageCount={(data ? data.total/8 : 1)}
        previousLabel="< previous"
        renderOnZeroPageCount={() => {}}
        className="bg-white px-4 py-3 flex items-center border-t border-gray-200 sm:px-6"
        pageLinkClassName="mx-2 bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        activeLinkClassName="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      />

      </div>

    </div>
  );
}

export default Home;
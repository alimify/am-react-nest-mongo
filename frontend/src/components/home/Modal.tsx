import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/post_modal';
import { useGetPostsQuery, useStorePostMutation } from '../../redux/services/post';
import { RootState } from '../../redux/store';


const Modal : React.FunctionComponent<{}>   = (props) => {

    const dispatch = useDispatch(),
          show = useSelector((state: RootState) => state.postModal.show);

    const [storePost,responseInfo] = useStorePostMutation();

    console.log(responseInfo.isSuccess,'isSuccess')

    
    useGetPostsQuery({
            page: 1,
            per_page: 10
    })
    

        

    const [getTitle,setTitle] = useState('');
    const [getContent,setContent] = useState('');
        
    return (<div> 

                <div id="modal"
                    className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50 transform scale-0 transition-transform duration-300`+(show?' scale-100':'')}>

                        
                        <div className="shadow sm:rounded-md sm:overflow-hidden w-1/2">
                

                                <div className="px-4 bg-white py-5">
                              
                                    <label className="block font-bold text-gray-600">
                                        Title
                                    </label>
                                    <div className="rounded-md shadow-sm mt-1">
                                            <input
                                                type="text"
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="shadow-sm p-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            />
                                    </div>
                                <div>

                                <div className="mt-2">
                                    <label className="block font-bold text-gray-600">
                                        Content
                                    </label>
                                    <div className="">
                                        <textarea
                                            rows={3}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="shadow-sm p-1 h-72 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                <button
                                    type="submit"
                                    onClick={() => dispatch(toggle())}
                                    className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    Close
                                </button>


                                <button
                                    type="submit"
                                    onClick={() => {
                                        storePost({
                                            title: getTitle,
                                            content: getContent,
                                            created_at: new Date()
                                        })

                                        setTitle('')
                                        setContent('')

                                        dispatch(toggle())

                                        console.log(responseInfo)
                                    }}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>


                </div>

    </div>);
}

export default Modal
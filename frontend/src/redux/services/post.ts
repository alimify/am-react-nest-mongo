import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (q) => ({
                url: `post/index?per_page=${q.per_page}&page=${q.page}`,
                method:'GET'
            }),
            providesTags: ['Post'],
        }),

        storePost: builder.mutation({
            query: (post) => {

                return {
                    url: 'post/store',
                    method:'POST',
                    body: post
                }
            },
            invalidatesTags: ['Post'],
        }),

        getPost: builder.query({
            query: (id) => ({
                url: 'post/view/'+id
            })
        })
    })
})

export const {
                useGetPostsQuery,
                useStorePostMutation,
                useGetPostQuery
            } = postApi
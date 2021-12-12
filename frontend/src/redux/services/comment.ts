import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath:"commentApi",
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000'}),
    tagTypes: ['Post','Comment'],
    endpoints: (builder) => ({
        getCommentByPost: builder.query({
            query: (q) => ({
                url: `comment/get-by-post/${q.post_id}?per_page=${q.per_page}&page=${q.page}`,
                method:'GET'
            }),
            providesTags: ['Post']

        }),

        storeComment: builder.mutation({
            query: (comment) => {

                return {
                    url: 'comment/store',
                    method:'POST',
                    body: comment
                }
            }
        }),

        getCommentByComment: builder.query({
            query: (id) => ({
                url: 'comment/get-by-comment/'+id
            }),
            providesTags: ['Comment']

        })
    })
})

export const {
                useGetCommentByPostQuery,
                useStoreCommentMutation,
                useGetCommentByCommentQuery
            } = commentApi
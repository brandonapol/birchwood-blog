import React from 'react'

export interface Blog {
    title: string;
    author: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

const BlogLoop = ( blog: Blog ) => {
  return (
    <div className='p-5 bg-timberwolf m-5 container flex items-center shadow-lg rounded-lg'>
        <div key={blog.title}>
            <h2 className='text-3xl font-bold px-3 border-b-2 border-black py-2 mb-3'>{blog.title}</h2>
            <p className='text-2xl text-payne px-3'>{blog.author}</p>
            <p className="text-m px-3 text-payne">{blog.createdAt}</p>
            <p className='py-3 px-3'>{blog.content}</p>
        </div>
    </div>
  )
}

export default BlogLoop
import React, { useState } from 'react'
import BlogCard from './BlogCard'

function AllBlogs({ blogs }) {
  console.log(blogs)

  return (
    <div className='all-blogs'>
        <h1>Blogs</h1>
        {blogs.map((blog) => <BlogCard blog={blog} />)}
    </div>
  )
}

export default AllBlogs
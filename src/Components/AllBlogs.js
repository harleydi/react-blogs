import React, { useState } from 'react'
import BlogCard from './BlogCard'

function AllBlogs({ blogs, setBlogs }) {
  console.log(blogs)

  return (
    <div className='all-blogs'>
        <h1>Blogs</h1>
        <div className='blogs'>
            {blogs.map((blog) => <BlogCard blogs={blogs} blog={blog} setBlogs={setBlogs} />)}
        </div>
    </div>
  )
}

export default AllBlogs
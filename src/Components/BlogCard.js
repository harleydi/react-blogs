import React from 'react'
import './BlogCard.css'

function BlogCard({ blog, blogs, setBlogs }) {
  const handleDelete = (blog) => {
    const remainingBlogs = blogs.filter((x) => {
            return x !== blog
    })
    
    setBlogs(remainingBlogs)
    console.log(remainingBlogs)
  }

  return (
    <div className='blog-card'>
        <h4 style={{ textDecoration: "underline" }}>{blog.title.toUpperCase()}</h4>
        <p>{blog.content}</p>
        <h6>Author: <span style={{ fontStyle: "italic", letterSpacing: "1px" }}>{blog.author}</span></h6>
        <p style={{ color: "green", fontSize: "10px"}}>{blog.createdAt}</p>
        <button onClick={() => handleDelete(blog)}>Delete</button>
    </div>
  )
}

export default BlogCard
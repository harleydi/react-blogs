import React from 'react'
import './BlogCard.css'

function BlogCard({ blog }) {
  return (
    <div className='blog-card'>
        <h4 style={{ textDecoration: "underline" }}>{blog.title.toUpperCase()}</h4>
        <p>{blog.content}</p>
        <h6>Author: <span style={{ fontStyle: "italic"}}>{blog.author}</span></h6>
        
    </div>
  )
}

export default BlogCard
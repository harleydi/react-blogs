import React, { useState } from 'react'

function CreateBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {
      title: title,
      content: content,
      author: author,
      createdAt: new Date().toISOString()
    }
    setBlogs([...blogs, blog])
    setTitle("")
    setContent("")
    setAuthor("")
  }
  return (
    <div>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label htmlFor="content">Content</label>
            <input type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
            <br />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog
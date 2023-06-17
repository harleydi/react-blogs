
import { useState } from 'react';
import './App.css';
import CreateBlog from './Components/CreateBlog';
import AllBlogs from './Components/AllBlogs';

function App() {
  const [blogs, setBlogs] = useState([])


  return (
    <div className="App">
      <AllBlogs blogs={blogs} setBlogs={setBlogs} />
      <CreateBlog blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
}

export default App;

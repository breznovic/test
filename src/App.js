import React, { useState, useRef } from 'react'
import './Styles/App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Language' },
    { id: 2, title: 'React', body: 'Library' },
    { id: 3, title: 'Angular', body: 'Framework' }
  ])

const createPost = (newPost) => {
setPosts([...posts, newPost])
}

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className='app'>
      <div>
        <PostForm create={createPost} />
        <PostList remove={removePost} posts={posts} title='Posts List' />
      </div>
    </div>
  )
}

export default App

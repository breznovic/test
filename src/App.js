import React, { useState } from 'react'
import './App.css'
import PostList from './Components/PostList'
import Button from './Components/UI/Button'
import Input from './Components/UI/Input'

function App() {
const [posts, setPosts] = useState( [
  {id: 1, title: 'JavaScript', body: 'Language'},
  {id: 2, title: 'React', body: 'Library'}, 
  {id: 3, title: 'Angular', body: 'Framework'}
])

const [title, setTitle] = useState('For input')
const bodyInputRef = useRef()
const addNewPost = (e) => {
e.preventDefault()
}

  return (
    <div>
      <div>
      <form>
        <Input value={title} onChange={e => setTitle(e.target.value)}
        type='text' placeholder='Post Information' />
        <Input type='text' ref={bodyInputRef}
        placeholder='Post Description' />
        <Button onClick={addNewPost} >Create post</Button>
      </form>
       <PostList className='pad' posts={posts} title='Posts List A' />
       </div>
    </div>
  )
}

export default App

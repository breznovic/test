import React, { useState, useRef, useMemo } from 'react'
import './Styles/App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import PostFilter from './Components/PostFilter'
import Modal from './Components/Modal/Modal'
import Button from './Components/UI/Button/Button'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Language' },
    { id: 2, title: 'React', body: 'Library' },
    { id: 3, title: 'Angular', body: 'Framework' }
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal,setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='app'>
      <div>
        <Button onClick={() => setModal(true)}>Create user</Button>
        <Modal visible={modal} setVisible={setModal} >
          <PostForm create={createPost} />
        </Modal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter 
        filter={filter}
        setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts List' />
      </div>
    </div>
  )
}

export default App




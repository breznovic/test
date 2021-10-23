import React, { useState, useRef, useMemo, useEffect } from 'react'
import './Styles/App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import PostFilter from './Components/PostFilter'
import Modal from './Components/Modal/Modal'
import Button from './Components/UI/Button/Button'
import { usePosts } from './Hooks/usePosts'
import { PostService } from './API/PostService'
import Loader from './Components/UI/Loader/Loader'
import { useFetching } from './Hooks/useFetching'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal,setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
  fetchPosts()
    },[])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
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
        {postError &&
        <h1>Error! ${postError}</h1>
        }
        {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop:50}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts List' />
        }
      </div>
    </div>
  )
}

export default App




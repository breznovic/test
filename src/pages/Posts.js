import React, { useState, useRef, useMemo, useEffect } from 'react'
import { usePosts } from '../Hooks/usePosts'
import { useFetching } from '../Hooks/useFetching'
import { PostService } from '../API/PostService'
import { getPageCount } from '../Components/Utils/pages'
import Modal from '../Components/Modal/Modal'
import Button from '../Components/UI/Button/Button'
import PostForm from '../Components/PostForm'
import PostFilter from '../Components/PostFilter'
import Loader from '../Components/UI/Loader/Loader'
import PostList from '../Components/PostList'
import Pagination from '../Components/UI/Pagination/Pagination'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
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
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts List' />
        }
        <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      </div>
    </div>
  )
}

export default Posts
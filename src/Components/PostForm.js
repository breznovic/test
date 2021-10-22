import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
      }

    return (
        <form>
            <Input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })}
                type='text' placeholder='Post Information' />
            <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Post Description' />
            <Button onClick={addNewPost} >Create post</Button>
        </form>
    )
}

export default PostForm

import React from 'react'

const Post = (props) => {
    return (
        <div>
            <div>
            <strong>{props.post.id}{props.post.title}</strong>
            </div>
            <div>
            {props.post.body}
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Post

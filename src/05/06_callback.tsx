import React from 'react'

export const User = () => {

    const deleteUser = () => {
        alert('User should be deleted')
    }

    const saveUser = () => {
        alert('User should be saved')
    }

    return <div>

        <div onClick={deleteUser}>Delete</div>
        <div onClick={saveUser}>Save</div>
    </div>
}
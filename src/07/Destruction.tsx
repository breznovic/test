import React, {useState} from 'react'
import {PropsManType} from "./07";

type PropsType = {
    title: string
    man: PropsManType
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const [message, setMessage] = useState<string>('Hello')

    const {title, man: {name}} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
    </div>
}
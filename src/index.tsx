import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {splitIntoWords} from "./01-hello-tests/01";

const sentence = 'Hello my friends!'
const result = splitIntoWords (sentence)
result[0] == 'hello'

ReactDOM.render(
    <App />,
  document.getElementById('root')
)


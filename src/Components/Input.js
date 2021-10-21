import React, { useState } from 'react'

function Input() {
    const [value, setValue] = useState('Input')
 
  return (
         <div>
             <h3>{value}</h3>
             <input type='text' value={value} 
             onChange={event => setValue(event.target.value)} />
         </div>
     )
 }
 
 export default Input
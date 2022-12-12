import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [tokendata,setTokendata] = useState('')

function Submit(e){
axios.post("http://localhost:8000",{email,name,password})
.then(e => setTokendata(e.data))
.catch(e => {
    console.log(e)
})
}

  return (
    <div>
        <input type="text" onClick={(e) => setName(e.target.value)} placeholder='name' />
        <input type="text" onClick={(e) => setEmail(e.target.value)} placeholder='email' />
        <input type="text" onClick={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={Submit}>Submit</button>
    </div>
  )
}

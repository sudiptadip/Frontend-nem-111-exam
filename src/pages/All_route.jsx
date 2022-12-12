import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Signin from './Signin'
import Signup from './Signup'

export default function All_route() {
  return (
    <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/" element={<Homepage/>} />
    </Routes>
  )
}

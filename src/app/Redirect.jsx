import React from 'react'
import { BOARD_PAGE } from '../constants/constsPaths'
import { Navigate } from 'react-router-dom'

export default function Redirect() {
  return (
   <Navigate to={BOARD_PAGE}></Navigate>
  )
}

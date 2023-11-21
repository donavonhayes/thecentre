import React from 'react'
// import { usersAPI } from '../rest/Endpoint';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    // console.log("onSubmit event", event);
    navigate('/quiz')
  }
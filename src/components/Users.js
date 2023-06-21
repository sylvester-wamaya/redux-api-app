import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const {users, isLoading, error } = useSelector((store) => store.Users)
    if(isLoading){
        return <h2>Is Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
  return (
    <div>
      
    </div>
  )
}

export default Users

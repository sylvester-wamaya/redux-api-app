import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

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
      {users.map((user) =>{
        <UserCard firstName={user.name.first} lastName={user.name.last} key={user.uuid}/>
      })}
    </div>
  )
}

export default Users

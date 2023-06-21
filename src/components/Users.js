import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { getUsers } from '../store/users/usersSlice'

const Users = () => {
    const dispatch = useDispatch()
    const {users, isLoading, error } = useSelector((store) => store.users)
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

    if(isLoading){
        return <h2>Is Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
  return (
    <div>
      {users.map((user) =>{
       return <UserCard firstName={user.name.first} lastName={user.name.last} key={user.email}/>
      })}
    </div>
  )
}

export default Users

import React from 'react'

const UserCard = ({firstName, lastName}) => {

  return (
    <div>
      <p>{firstName} {lastName}</p>
    </div>
  )
}

export default UserCard

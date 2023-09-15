import React from 'react'

const Users = ({ param, users }: { param?: string | number, users: [] }) => {
  // console.log("Should render in server")
  // console.log({ param, users })
  console.log(param)
  return (
    <div>Users</div>
  )
}

export default Users
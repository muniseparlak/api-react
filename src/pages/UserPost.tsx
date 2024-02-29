import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

function UserPost() {
  const pageData = useLoaderData()
  const {userId} = useParams()

  console.log(pageData)
  return (
    <div>
    <Link to={'/users' + userId}>{pageData?.user?.name}</Link>
    </div>
  )
}

export default UserPost

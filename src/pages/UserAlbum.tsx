import React from 'react'
import { Card,  CardTitle } from 'react-bootstrap'
import {  useLoaderData } from 'react-router-dom'

function UserAlbum() {
  const pageData = useLoaderData()
  

  console.log(pageData)
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pageData?.album?.title}</Card.Title>
      </Card.Body>
    </Card>
    {pageData.photos?.map((photo) => {
      return(
      <Card key={photo.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo.url}/>
      <CardTitle>{photo.title}</CardTitle>
    </Card>
      )
    })}
     </div>
    
  )
}

export default UserAlbum

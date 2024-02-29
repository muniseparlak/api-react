import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserCard from '../components/UserCard'
import { UserType } from '../types/user'
import Nav from 'react-bootstrap/Nav';
import {FadeLoader} from 'react-spinners'

const url = 'https://jsonplaceholder.typicode.com/users'

type TabType = 'post' | 'album' | 'todo'

type TabsType = TabType[]

function UserPage() {

const params: {userId : number} = useParams()

const [user, setUser] = useState<UserType | null>(null)

const tabTitles: TabsType = ['post', 'album', 'todo']

const [tab, setTab] = useState<TabType>('post')

    const getUser = async() => {
        const res = await fetch(url + '/' + params.userId)
        const data = await res.json()
       setUser(data)
    }

   useEffect(() => {
    getUser()
   }, []) 

   const [userData, setUserData] = useState(null)

   const getUserData = async() => {
    setLoading(true)
    const res = await fetch(url + '/' + params.userId + '/' + tab + 's')
    const data = await res.json()
    setLoading(false)
    console.log(data)
   setUserData(data)
}

useEffect(() => {
getUserData()
}, [tab])

const [loading, setLoading] = useState(true)

  return (
  <>
  
  <Nav variant="tabs" defaultActiveKey="/home">
    {tabTitles.map((tabTitle) => (
      <Nav.Item onClick={()=>{
        setTab(tabTitle)
      }}>
        <Nav.Link eventKey={"/" + tabTitle}>{tabTitle}</Nav.Link>
      </Nav.Item>
    ))}
      
      
    </Nav>

    {user &&  <UserCard user={user}/> }
    {userData && !loading && userData?.map(item => 
    <Link to={tab + 's' + '/' + item.id}>
      {tab}: {item.id}
      </Link>)}
    {loading && <div className='d-flex justify-content-center align-items-center'>
    <FadeLoader/>
    </div>
    }
  </>
  )
    
}

export default UserPage

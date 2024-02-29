import React, { useEffect, useState } from 'react';
import { UsersType } from '../types/user';
import UserCard from '../components/UserCard';
import { useLoaderData } from 'react-router-dom';


export default function Home () {
 
  const users: UsersType  = useLoaderData()

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => 
        <UserCard key={user.id} user={user}/>
        )}
      </ul>
      
    </div>
  );
}



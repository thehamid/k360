import React from 'react'
import Navbar from './navbar'
import UserDefaultValueSetter from './UserDefaultValueSetter'
import { cookies } from "next/headers";



   //get userData from DB
const  getData = async (user_id) => {
const data = await fetch(`${process.env.SERVER_URL}/api/users/${user_id}`, {
  cache: "no-store", headers: {
     id: user_id
  }
});  
return data.json(); 
  
}


const Header = async () => {
  const cookieStore = cookies();
  const user_id = cookieStore.get("token_id") ? cookieStore.get("token_id").value : undefined;
  const data = await getData(user_id);
  return (
    <header className="  bg-zinc-800">
      <Navbar/>
      <UserDefaultValueSetter setter={data} />      
    </header>
  )
}

export default Header


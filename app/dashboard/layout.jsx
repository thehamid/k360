import React from 'react';
import { redirect  } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from "next-auth";
import User from '@/models/User';
import connect from '@/utils/db';


const DashboardLayout = async ({ children }) => {
    const session= await getServerSession()
  await connect()
  const user = await User.findOne({ email: session.user.email })
  if (!user) return '<h3>در اتصال به پایگاه داده مشکلی به وجود آمده</h3>'
  if (!session || user.roles!=100 ) {  
    redirect("/");
  }

 
    return (
        <div className='grid  md:grid-cols-4 md:gap-5 p-8'>
        <div>
          <ul className='bg-zinc-800 rounded-md text-center flex flex-row md:flex-col '>
             <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/'>پیشخوان</Link>
            </li>
            <li className='mb-2'>
              <Link  className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/articles'>مطالب</Link>
            </li>
            <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/medias'>سریال‌ها</Link>
            </li> 
            <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/reviews'>بررسی‌ها</Link>
            </li>        
             <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/actors'>عوامل</Link>
            </li>      
            <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/users'>کاربران</Link>
            </li>                 
            <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/comments'>نظرات</Link>
            </li>   
            <li className='mb-2'>
              <Link className= 'hover:bg-zinc-600  flex justify-center p-2' href='/dashboard/gallery'>گالری</Link>
            </li>   
           
          
          </ul>
        </div>
        <div className='md:col-span-3 min-h-screen'>
          <div>
           {children}
          </div>
        </div>
      </div>
   
  )
}


export default DashboardLayout

export const metadata = {
  title: "پیشخوان مدیریت",
};
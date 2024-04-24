"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import DropDown from "./DropDown";
import { Menu, Transition } from "@headlessui/react";
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'

function Navbar() {
  const { data: session } = useSession();
  const avatar = useSelector(store => store.avatarSlice)
  const role = useSelector(store => store.roleSlice)

  
  function logoutHandler() {
    Cookies.set("token_id", "", { expires: 0 });

    signOut({ callbackUrl: "/login" });
  }

  return (
    
      <nav className="container m-auto p-5 flex justify-between items-center h-15">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        {!session ? (
          <>
            <div>
              <Link
                href="/login"
                className="border border-white px-2 py-1 m-1 rounded-lg"
              >
                ورود
              </Link>
              <Link
                href="/register"
                className="border border-red-600 bg-red-600  text-white px-2 py-1 m-1 rounded-lg"
              >
                عضویت
              </Link>
            </div>
          </>
        ) : (
          <>
            <Menu as="div" className="relative inline-block">
                <Menu.Button className="text-white-500">
                  <Image src={avatar.value} alt={session.user.name} width={50} height={50} className='aspect-square rounded-md w-[20px] sm:w-[36px] object-cover'/>               
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                  <Menu.Items className="absolute z-10 left-0 w-56 bg-zinc-600 rounded-xl p-4 origin-top-right border-w border-slate-100">
                    <div className="flex flex-row p-1 justify-start">
                      <div>
                      <Image src={avatar.value} alt={session.user.name} width={50} height={50} className='aspect-square rounded-md w-[20px] sm:w-[36px] object-cover'/>
                     </div>
                      <div className="flex flex-col mr-2">
                        <small>{session.user.name }</small>
                        <small className="text-gray-400">{session.user.username }@</small>
                     </div>
                    </div>
                  <Menu.Item>
                    <DropDown
                      className="flex p-2 border-t-[1px] border-zinc-500 hover:text-slate-300"
                      href={`/user/${session.user.username}`} >
                      صفحه من
                    </DropDown>
                  </Menu.Item>
                  <Menu.Item>
                    <DropDown
                      className="flex p-2 border-t-[1px] border-zinc-500 hover:text-slate-300"
                      href="/profile"
                    >
                      تنظیمات
                    </DropDown>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="flex p-2 border-t-[1px] border-zinc-500  hover:text-slate-300"
                      href="#"
                      onClick={logoutHandler}
                    >
                      خروج
                    </Link>
                  </Menu.Item>
                  {role.value==100 && (
                    <Menu.Item>
                      <DropDown
                        className="flex p-2 border-t-2 border-zinc-500  hover:text-slate-300"
                        href="/dashboard"
                      >
                        پیشخوان مدیریت
                      </DropDown>
                    </Menu.Item>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        )}
      </nav>

  );
}

export default Navbar;

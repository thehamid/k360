import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LuInstagram } from "react-icons/lu"
import { RiTelegramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full min-h-48 bg-zinc-800">
      <div className="container m-auto flex flex-col md:flex-row justify-between gap-2 text-gray-50 p-5 mt-20">
        
      <div className="flex flex-col justify-start items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo-header.png"
            alt="logo"
            width={200}
            height={85}
            className="object-contain"
          />
          </Link>
          <h2>سریال ایرانی و دیگر هیچ ...</h2>
      </div>

      <div className="flex flex-col justify-between items-center"></div>

      <div className="flex flex-col justify-between items-center"></div>

        <div className="flex flex-col justify-between items-center gap-2">
        <span> در شبکه‌های جتماعی همراه ما باشید  </span>
          <Link href="https://instagram.com/kelaket360" target="_blank" className="flex w-full flex-row justify-between border-[1px] p-2 rounded-md">
              <span > kelaket360 </span>
              <LuInstagram className="text-xl"/>
          </Link>
          <Link href="https://t.me/kelaket360" target="_blank" className="flex w-full flex-row justify-between border-[1px] p-2 rounded-md">
              <span > kelaket360 </span>
              <RiTelegramLine className="text-2xl"/>
          </Link>
          <span className="text-xs text-gray-400">All Right Reserved © 2024</span>
        </div>


        </div>
    </footer>
  )
}

export default Footer

import React from "react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800">
      <div className="container m-auto flex justify-between text-gray-50 p-3 mt-20">
        
      <div className="flex flex-col justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between items-center">Menu 1</div>

      <div className="flex flex-col justify-between items-center">menu2</div>

      <div className="flex flex-col justify-between items-center">menu3</div>


        </div>
    </footer>
  )
}

export default Footer

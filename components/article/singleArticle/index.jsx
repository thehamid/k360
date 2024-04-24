'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Article = ({ data }) => {
    console.log(data)
  return (
    <div className='single_article container mx-auto flex lg:flex-row flex-col p-5'>
      <section className='content flex flex-col justify-center basis-8/12 m-2'>
        <h2 className='font-extrabold sm:text-2xl  text-lg text-center p-8'>{data.title}</h2>
        <div className='flex justify-between justify-items-center border-b-2 border-t-2 border-gray-900 p-3 '>
          <span>تاریخ: {data.createdAt} </span>
          <span>نویسنده: {data.author }</span>
          <span>دسته:  {data.cats.map((cat,i) => (
            <Link href={`/category/${cat.slug}`} key={i} className='p-2'>{cat.title}</Link>
          )) }</span>
        </div>
        <div className='mx-auto p-5'>Share icons</div>
        <picture className='p-2'>
          <Image src={data.imgArticle} alt={data.title} width={1000} height={500} className='object-cover w-full h-auto' />
        </picture>
        <article className='p-2 mt2'>
          <p className='text-justify leading-relaxed'  dangerouslySetInnerHTML={{__html:data.content}}></p>
        </article>

        <div className='flex justify-between justify-items-center border-b-2 border-t-2 border-gray-900 p-3'>
          <span>{data.tags} </span>
          <span>{data.source}</span>
         
        </div>

        <div className='mx-auto p-5'>reaction emoji</div>
        <div className='mx-auto p-5'>comment section</div>

      </section>
      <section className='sidebar basis-4/12 m-2 flex flex-col'>
        <div className='widget w-full h-auto bg-red-700 text-gray-50 rounded-lg text-center font-bold p-10 my-5 '>
        ما را در شبکه های اجتماعی دنبال کنید
        </div>

        <div className='widget w-full h-auto bg-gray-700 text-gray-50 rounded-lg text-center font-bold p-10 my-5'>
            پرببیننده ترین مطالب
         </div>

        <div className='widget w-full h-auto bg-gray-700 text-gray-50 rounded-lg text-center font-bold p-10 my-5'>
              بازیگران مرتبط با مطلب

        </div>


      </section>


    </div>
  )
}

export default Article
'use client'
import { useState, useEffect } from "react";
import Article from '@/components/article/singleArticle'
import axios from "axios";


const SingleArticle = (req) => {
  const [postData,setpostData] = useState();

  const slug=req.params.slug

  useEffect(() => {
    getData()
   
  }, [slug])

  
  //get userData from DB
  async function getData() {
        await axios
      .get(`/api/articles/${slug}`)
      .then(
        (d) => {
          setpostData(d.data.data)
          console.log(d.data.data)
        }
      )
      .catch((e) => console.log(e.response));

     
  }


  return (
    <div>
      {!postData ?
        <h3 className="text-center text-red-600">Loading...</h3> 
        :
        <Article data={postData} />
      }
    </div>
   
  )
}

export default SingleArticle
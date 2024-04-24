"use client"
import { useEffect, useState } from "react";

import MainDash from "@/components/dashboard/main";
import UsersDash from "@/components/dashboard/users";
import ArticlesDash from "@/components/dashboard/articles";
import NewArticle from "@/components/dashboard/articles/new_article";
import EditArticle from "@/components/dashboard/articles/edit_article";
import ArticleCategory from "@/components/dashboard/articles/article_cats";
import MediasDash from "@/components/dashboard/medias";
import GalleryDash from "@/components/dashboard/gallery";
import ReviewsDash from "@/components/dashboard/reviews";
import CommentsDash from "@/components/dashboard/comments";
import ActorsDash from "@/components/dashboard/actors";

const Pages = ({params}) => {
   const [details,setdetails]=useState(<MainDash/>);

   useEffect(()=>{
      if(params.slug[0]=="users"){
         setdetails(<UsersDash/>);
      }
      else if(params.slug[0]=="articles"){
         setdetails(<ArticlesDash/>);
      }
      else if(params.slug[0]=="medias"){
         setdetails(<MediasDash/>);
      }
      else if(params.slug[0]=="reviews"){
         setdetails(<ReviewsDash/>);
      }
      else if(params.slug[0]=="comments"){
         setdetails(<CommentsDash/>);
      }
      else if(params.slug[0]=="actors"){
         setdetails(<ActorsDash/>);
      }
      else if(params.slug[0]=="gallery"){
         setdetails(<GalleryDash/>);
      }
         
      //New Components   
      else if(params.slug[0]=="new-article"){
         setdetails(<NewArticle/>);
      }
      else if(params.slug[0]=="article-cats"){
         setdetails(<ArticleCategory/>);
      }


      //Edit Component
      else if(params.slug[0]=="edit-article"){
         setdetails(<EditArticle/>);
      }

   },[params.slug[0]]);


   return (
      <div>
         {details}
      </div>
   );
}

export default Pages;


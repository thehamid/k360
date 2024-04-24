import connect from '@/utils/db'
import { Article,ArticleCats } from "@/models/Article"
import User from "@/models/User"
import { NextRequest,NextResponse } from 'next/server';

export async function GET(req, { params }) {
    await connect();
    const slug =params.slug;
      
    try {
        //find article
        const article = await Article.findOne({ slug: slug });

        //set Author
        const author = await User.findById( article.author).select({name:1})
        //set Category
        const cat = await ArticleCats.find().where("_id").in(article.cats)


        const sendData = {
            title:article.title,
            content:article.content,
            excerpt:article.excerpt,
            imgArticle:article.imgArticle,
            createdAt:article.createdAt,
            published:article.published,
            tags:article.tags,
            slug:article.slug,
            author:author.name,
            cats:cat,
        }
        
         return  NextResponse.json({data:sendData}, { status: 200 });
    
      
    } catch (error) {
       
        return  NextResponse.json({data:'failed'}, { status: 500 });
    }
}
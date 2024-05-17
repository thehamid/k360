import connect from '@/utils/db'
import { Episode } from "@/models/Media"
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    await connect(); 
    
    const id=params.id
    const s_num=params.season_number
    const e_num=params.episode_number

        console.log(id,s_num,e_num)
    try {
        const episode = await Episode.find({media_id:id,season_number:s_num,episode_number:e_num})
        return  NextResponse.json({data:episode}, { status: 200 });   
    } catch (error) {     
        return  NextResponse.json({data:'failed'}, { status: 500 });
    }
}
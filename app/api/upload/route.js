import connect from '@/utils/db'
import  File  from "@/models/File"
import { NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
   const date = new Date();
   const year = date.getFullYear();
   const formData = await req.formData();
    
   const file = formData.get("file");
   if (!file) {
      return NextResponse.json({}, { status: 400 });
   }
   if (file.size<1) {
      return NextResponse.json({data:"please enter file"}, { status: 400 });
   }


   const destinationDirPath = path.join(process.cwd(), `public/uploads/${year}`);
   const fileArrayBuffer = await file.arrayBuffer();
   

   if (!existsSync(destinationDirPath)) {
      fs.mkdir(destinationDirPath, { recursive: true });
   }


   const newname=Date.now()+file.name;
   const fileUrl=`/uploads/${year}`+"/"+newname;
   
   await fs.writeFile(
      path.join(destinationDirPath, newname),
      Buffer.from(fileArrayBuffer)
   );

   //Save to DB
   await connect(); 

   const body = {
      name: newname,
      url:fileUrl,
   }

   const newFile = new File();
   newFile.set({ ...body });
   const myfile=await newFile.save();


   return NextResponse.json({data:fileUrl});
}
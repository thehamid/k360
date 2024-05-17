import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuTrash, LuPen, LuEye } from "react-icons/lu";
import {useSearchParams} from 'next/navigation'
import Toggle from '@/components/elements/toggle'

const PersonsDash = () => {
  const [allPerson, setallPerson] = useState(-1);
  const [reload, setReload] = useState('false');
  const [searchedVal, setSearchedVal] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const searchParams = useSearchParams()
  const [btns,setBtns]=useState(-1)



  useEffect(() => {
   setPageNumber(searchParams.get("page")!=undefined?searchParams.get("page"):1)

  },[searchParams.get("page")]);



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/dashboard/persons?page=${pageNumber}`);

      const data = await response.json();
      setallPerson(data.all_persons);
      
      //pagination
      const pNumber = Math.ceil(data.all_person_Number / 10)
      const numArray = Array.from(Array(pNumber).keys())
      const filterNum=[]
      numArray.map(num => {
        if (
          num == 0 || num==(pNumber-1) || ((num>(Number(pageNumber)-4)) && (num<(Number(pageNumber)+2)))
        ) {
          filterNum.push(num)
        }
        
      })
      setBtns(filterNum)

		setReload(false)
    }

    fetchData();
  }, [reload,pageNumber]);






   

	const deletehandler = async (id) => {
		await fetch(`/api/dashboard/persons/${id}`, {
			method: 'DELETE',
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			   }
		
			})
			.then((response) => response.json())
			.then((messages) => {console.log("messages");});
			setReload(true)
	}
	
	
  
  return (
    <div>
      <h2 className="mb-4 text-xl border-b-[1px] border-zinc-600">اشخاص و عوامل</h2>
      <div className="flex justify-between">
      <div className="m-3 flex justify-start ">
        <Link
          href="/dashboard/new-person"
          className="border border-red-600 bg-red-600  text-white px-2 py-1 m-1 rounded-lg"
        >
          شخص جدید
        </Link>
        <Link
          href="/dashboard/person-cats"
          className="border border-red-600 bg-red-600  text-white px-2 py-1 m-1 rounded-lg"
        >
          دسته‌بندی‌اشخاص
        </Link>
        </div>
        <div className="m-3 flex justify-end ">
      <input placeholder="جستجو..." className="bg-zinc-800 text-gray-300 rounded-md p-2" onChange={(e) => setSearchedVal(e.target.value)} />
      </div>


      </div>
     
  

      <div class="flex items-center justify-center">
        {(allPerson == -1) ? <p>Loading...</p> : (allPerson == -2) ? <p>Error...</p> :
         <div class="w-full col-span-12">
         <div class="overflow-auto lg:overflow-visible ">
           <table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
             <thead class="bg-zinc-800 text-gray-300 text-center rounded-lg">
               <tr>
                 <th class="p-3">تصویر و عنوان شخص</th>
                 <th class="p-3 ">دسته بندی</th>
                 <th class="p-3 ">وضعیت</th>
                 <th class="p-3 ">عملیات</th>
               </tr>
             </thead>
             <tbody>
                  {allPerson.filter((row) =>
                !searchedVal.length || row.name
                  .toString()
                  .toLowerCase()
                  .includes(searchedVal.toString().toLowerCase()) 
              )        
                    .map((item, index) => (                
                 <tr key={index} class="bg-zinc-800">
                   
                   <td class="p-3">
                     <div class="flex align-items-center">
                       <Image
                         class="rounded-full h-12 w-12  object-cover ml-1"
                         width={48}
                         height={48}
                         src={item.imgPerson ? item.imgPerson : ""}
                         alt={item.name}
                       />
                       <div class="mr-3 mt-2">
                         <div class="font-bold text-white">{item.name}</div>
                       </div>
                     </div>
                   </td>
                   <td class="p-3">
                   <span>{item.cats.map((cat,i) => (
                         <Link href={`/category/${cat.slug}`} key={i} className='p-2'>{cat.title}</Link>
                     ))}</span>
                   </td>
                   <td dir="ltr">
                          <Toggle status={item.published} />
                   </td>
                   <td class="p-3 flex justify-center">
                     <Link
                       target="_blank"
                       rel="noreferer"
                       href={`/person/${item.slug}`}
                       class="text-gray-400 hover:text-gray-100 mr-2"
                     >
                       <LuEye>نمایش</LuEye>
                     </Link>
                     <Link
                       href={`/dashboard/edit-person/${item._id}`}
                       class="text-gray-400 hover:text-gray-100  mx-2"
                     >
                       <LuPen>ویرایش</LuPen>
                     </Link>
                     <span
                       onClick={() => deletehandler(item._id)}
                       class="text-gray-400 hover:text-gray-100  ml-2 cursor-pointer"
                     >
                       <LuTrash>حذف</LuTrash>
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
            </div>
            <div className="flex justify-center items-center gap-4 text-center">
      {
        btns.map((btn, i) => (
          <Link key={i} className={pageNumber== btn+1?'bg-zinc-600 rounded-md w-8 h-8 justify-center':'bg-zinc-800 rounded-md w-8 h-8 justify-center'}
            href={`/dashboard/persons?page=${btn + 1}`}>{ btn+1}</Link>
        ))
      }

      </div>
          </div>         
        }
      </div>
     
   
    </div>
  )


}

export default PersonsDash;

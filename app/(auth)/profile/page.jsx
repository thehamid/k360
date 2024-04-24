"use client";
import { useState,useEffect,useRef } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Tab } from "@headlessui/react";
import axios from "axios";
import { toast } from 'react-toastify';
import ImageUpload from '@/components/formElement/imageupload'
import { useDispatch,useSelector } from 'react-redux'
import { setAvatarValue } from "@/lib/redux/slices/user/avatarSlice";
import  Cookies from "js-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const { data: session } = useSession();
  const [img, setImage] = useState();
  const [reload, setReload] = useState(false);
  const [userData,setUserData] = useState(-1);
  const dispatch=useDispatch()
  const avatar = useSelector(store => store.avatarSlice)
  const loged=useSelector(store=>store.logedSlice.value);
  const nameRef = useRef();
  const mobileRef = useRef();
  const bioRef = useRef();
  const user_id = Cookies.get('token_id')

  if (!loged) {  
    redirect("/");
  }
 
  useEffect(() => {
    getData()
   
  }, [reload])


    //get userData from DB
    async function getData() {
        await axios
      .get(`/api/users/${user_id}`)
      .then(
        (d) => {
          setUserData(d.data.data)
          dispatch(setAvatarValue(d.data.data.avatar))
        }
      )
      .catch((e) => console.log(e.response));

     
  }

  //uploade Avatar
  const  uploadAvatar = (props) => {
    const data= new FormData()
    data.append('file', props)
    
    axios
      .post("/api/upload", data)
      .then(
        (d) => {
          setImage(d.data.data)
          toast.success("تصویر پروفایل آپلود شد");
        }
      )
      .catch((e) => console.log(e.response));
  }

  //update Setting User
  const updateSubmit = async (e) => {
    e.preventDefault();
    const pic={img}
    const formData = {
      name: nameRef.current.value == "" ? undefined : nameRef.current.value,
      mobile: mobileRef.current.value == "" ? undefined : mobileRef.current.value,
      bio: bioRef.current.value == "" ? undefined : bioRef.current.value,
      avatar: pic.img == "" ? undefined : pic.img,
   }
    
    dispatch(setAvatarValue(pic.img))
    const response = await fetch(`/api/users/${user_id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    toast.success("اطلاعات ذخیره شد");
    setReload(true)
  };

  return (
    <div className="setting-page my-2 min-h-screen">
      <div className="xl:container mx-auto">
       
        <div className="w-full max-w-2xl mx-auto px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-black text-white p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-black text-gray-50 border-b-2 border-red-600"
                    : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              پروفایل
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-black text-gray-50 border-b-2 border-red-600"
                    : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              تنظیمات
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-black text-gray-50 border-b-2 border-red-600"
                    : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              واچ لیست
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-2.5 text-sm font-medium leading-5",
                  selected
                    ? "bg-black text-gray-50 border-b-2 border-red-600"
                    : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              فعالیت‌ها
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            {/* profile */}
            <Tab.Panel className="p-3">
              <form className="mt-6" onSubmit={updateSubmit}>
                <div className="my-4 flex gap-6 sm:flex-row flex-col">
                 
                    <div className="relative flex flex-col items-center justify-center">
                      <ImageUpload onInput={uploadAvatar} src={avatar.value}/>
                    
                    </div>
                 
                  <div className="flex-1 space-y-3">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-white text-right"
                      >
                        نام شما
                      </label>
                      <input
                        ref={nameRef}
                        type="text"
                        defaultValue={userData.name}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-white text-right"
                      >
                        شماره موبایل
                      </label>
                      <input
                        ref={mobileRef}
                        type="number"
                        defaultValue={userData.mobile}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white text-right"
                  >
                    بیوگرافی
                  </label>
                  <textarea
                    ref={bioRef}
                    placeholder="کمی درباره خودت بگو"
                    defaultValue={userData.bio}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  ></textarea>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md "
                  >
                    ذخیره تغییرات
                  </button>
                </div>
              </form>
            </Tab.Panel>

            <Tab.Panel className="p-3">تنظیمات</Tab.Panel>
            <Tab.Panel className="p-3">واچ لیست</Tab.Panel>
            <Tab.Panel className="p-3">فعالیت ها</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        </div>
        
      
        </div>
    </div>
  );
};

export default Profile;

function callbackFn(link) {
  throw new Error("Function not implemented.");
}

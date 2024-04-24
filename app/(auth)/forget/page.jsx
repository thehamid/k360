import Link from 'next/link'


export default function Forget() {
    return (
        <div className="flex items-center flex-col p-10">
            <h2 className="font-black p-2 text-2xl">بازیابی رمز کلاکت 360</h2>
            <div>
            </div>
           
      <div className='forget_form'>
      <div className="relative flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full p-6 bg-zinc-800 rounded-md shadow-md lg:max-w-xl">
         <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white text-right"
            >
              ایمیل
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-800 focus:outline-none focus:bg-red-600">
              ارسال ایمیل بازیابی رمز
            </button>
          </div>
        </form>
     
       </div>
    </div>
            </div>



        </div>
    )
    
}
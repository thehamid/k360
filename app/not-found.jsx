const NotFound = () => {
    return (
       <div className=" flex flex-col justify-center items-center min-h-svh ">
          <h1 className="text-4xl uppercase md:text-7xl">
             <span className="before:bg-primary relative z-10 before:absolute before:left-0 before:bottom-1 before:-z-10 before:h-2.5 before:w-full before:md:bottom-3 before:md:h-4">
             404 Not Found
          </span>

          </h1>
          
          <span>صفحه یافت نشد...</span>

          
       </div>
    );
 }
 
 export default NotFound;
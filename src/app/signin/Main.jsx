import React from 'react'

function Main() {
  return (
    <>
    <div className='relative h-[60vh] overflow-hidden'>
     
     <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
     <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>Welcome to the Z-Sharp Era</div>
     <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>let's sign in and prove the results.</div> 
     </div>
      
   </div>
   <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-auto w-auto mx-52 my-5 mb-36 py-8 px-12 rounded-xl">
    <div className="text-2xl font-bold mx-auto">Sign In</div>
    <div className='flex flex-col gap-2'>
    <div className='text-xl font-medium my-auto'>Email</div>
    <input
            className="border border-white py-3 px-4 w-full mb-2 rounded-xl"
            placeholder="Insert your Email"
            name="send"
            type="text"
            required/>
    </div>
    <div className='flex flex-col gap-2 my-7'>
    <div className='text-xl font-medium my-auto'>Password</div>
    <input
            className="border border-white py-3 px-4 w-full mb-2 rounded-xl"
            placeholder="Insert your Passowrd"
            name="send"
            type="password"
            required/>
    </div>
        <label className="text-sm" htmlFor="rememberMe">
            Remember Me
          </label>
          <div className="flex items-end justify-end">
          <button
            className="bg-second hover:bg-navbar text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
   </div>
 </div>
        
    </>

  
  )
}

export default Main

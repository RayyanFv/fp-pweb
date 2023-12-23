import React from 'react'

function AdminDash() {
  return (
    <>
    <div className='flex flex-row w-full h-44 bg-navbar'>
        <div className='flex flex-col w-1/5 h-full py-8 gap-1 border-r'>
            <div className='text-3xl font-bold text-center mt-10`'>Z-Sharp</div>
            <div className='text-2xl font-bold text-center mt-10`'>Admin Dashboard</div>
            <div className='text-md font-normal text-center mt-10`'>Business Assistant</div>
        </div>
        <div className='flex flex-col ml-auto my-auto gap-5 px-5'>
        
        <div className='rounded-full w-16 h-16 mx-auto '>
        <img src='/images/technologies/matchaiai.png' className='h-fit w-fit' />
        </div>
        <div className='my-auto mx-auto'>Matchaiai</div>
        
        </div>
    </div>

    

    <div className='flex w-auto h-full'>
    
    <div className='flex w-1/5 h-full border-r bg-navbar'></div>
    <div className='flex flex-col w-4/5 h-full mx-auto gap-3 py-10'>
        <div className='font-bold mx-auto'>chat</div>
    <div className='flex flex-row mx-auto w-1/2 h-18 gap-2 mr-auto py-2'>
    <div className='rounded-full w-16 h-16'>
        <img src='/images/technologies/matchaiai.png' className='h-fit w-fit' />
        </div>
        <div className='border rounded-md w-full py-2 px-2'>
            wow thats amazing
    </div>
    </div><div className='flex flex-row mx-auto w-1/2 h-18 gap-2 mr-auto py-2'>
        <div className='border rounded-md w-full py-2 px-2'>
            Iyalah
    </div>
    <div className='rounded-full w-16 h-16'>
        <img src='/images/technologies/matchaiai.png' className='h-fit w-fit' />
        </div>
    </div>
    
        
    <div className='flex flex-row mx-auto w-1/2 h-16 gap-2'>
    <div className='flex flex-col my-auto w-full'>
    <input
            className="border border-white py-3 px-4 w-full rounded-xl"
            placeholder="Enter Your Message"
            name="send"
            type="text"
            required/>
    </div>
    <button className='flex bg-[#1C1C1C] border flex-col h-12 my-auto w-1/8 rounded-xl drop-shadow-xl px-7 ml-auto' >
          <div className="mx-auto my-auto font-semibold">Send</div>
    </button>
    </div>
    
    </div>
    
    </div>
    </>
    
    
  )
}

export default AdminDash
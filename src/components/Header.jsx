import React from 'react';


function Header() {

  return (
    <div className='bg-[#0C132F] py-10'>
    <div className="className='flex rounded-full border-2 mx-44 bg-navbar h-auto w-auto'">
        <div className="container mx-auto flex items-center justify-between gap-8 py-2">
          <a href="/" className="text-white ml-10 font-bold text-xl">Z-Sharp</a>
          <a href="/technologies" className="text-white">Technologies</a>
          <a href="/purchase" className="text-white">Purchase</a>
          <a href="/about-us" className="text-white">About</a>
          <div className="space-x-4 ml-auto mr-7 rounded-full bg-white py-2 px-4">
          <a href="/signin" className="text-black font-bold">User</a>
          </div>
        </div>
      </div>
    </div>
    
   
  );
}

export default Header;

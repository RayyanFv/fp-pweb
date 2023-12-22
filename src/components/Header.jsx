import React from 'react';


function Header() {
  return (
    <div className="App">
      <header className="className='flex rounded-full border-2 mt-12 mx-44 bg-navbar h-auto w-auto'">
        <div className="container mx-auto flex items-center justify-between gap-8 py-2">
          <a href="/" className="text-white ml-10 font-bold text-xl">Z-Sharp</a>
          <a href="/about" className="text-white">Technologies</a>
          <a href="/services" className="text-white">Purchase</a>
          <a href="/contact" className="text-white">About</a>
          <div className="space-x-4 ml-auto mr-7 rounded-full bg-white py-2 px-4">
          <a href="/contact" className="text-black font-bold">Sign In</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

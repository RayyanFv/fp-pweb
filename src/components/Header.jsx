import React from 'react'
import HeaderItem from './HeaderItem';

function Header() {
    const menu=[
        {
            name:'Z-Sharp'
        },
        {
            name:'Technologies'
        },
        {
            name:'Purchase'
        },
        {
            name:'About Us'
        }
    ]
  return (
    <div className='flex flex-row rounded-full border-2 bg-navbar h-fit w-auto mt-12 px-3 mx-44'>
        <div className='font-normal flex justify-left flex-row gap-8 mt-4 ml-8 mb-4'>
        {menu.map((item)=>(
            <HeaderItem name={item.name}/>
        ))}
        </div>
        <div className='flex flex-row rounded-full justify-end border-2 bg-semiwhite h-auto mx-6 w-auto px-4'>
        <div className='font-bold text-main flex justify-end flex-row gap-8 mt-4 mx-8 mb-4'>wayao</div>
        </div>
        
    </div>
  )
}
export default Header
import React from 'react'

function HeaderItem({name}) {
  return (
    <div className='flex flex-row items-center gap-8'>
        {name}
    </div>
  )
}

export default HeaderItem
import React from 'react'

function PictureWithSidebar({url,width,color, flex="flex-row"}) {
  return (
    <div className={`${width} flex ${flex}`}>
        <img src={url} className='w-11/12' alt="photoo" srcset="" />
        <div className={`${color} w-[18px] ${flex==="flex-row"?"left-[-8px]":"left-[8px]"} z-40 h-32 grid justify-items-center relative  top-[50px]`}></div>
    </div>
  )
}

export default PictureWithSidebar
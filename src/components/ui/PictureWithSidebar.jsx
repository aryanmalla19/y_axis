import React from 'react'

function PictureWithSidebar({url,width,color, flex="flex-row"}) {
  return (
    <div className={`${width} flex ${flex}`}>
        <img src={url} className='w-[99%]' alt="photoo" srcset="" />
        <div className={`${color} w-[8px] ${flex==="flex-row"?"left-[-4px]":"left-[4px]"} z-50 h-32 grid justify-items-center relative  top-[50px]`}></div>
    </div>
  )
}

export default PictureWithSidebar
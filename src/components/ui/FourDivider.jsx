import React from 'react'

function FourDivider({title, data}) {
  return (
    <div className='w-[20%]'>
        <h1 className='text-lg font-semibold pt-2'>{title}</h1>
        <h1 className='w-12 relative left-[9px] top-[5px] h-2  bg-red-600'></h1>
        <ul className='border  px-2 py-3 flex flex-col'>
            {data.map((e)=>{
                return(
                    <li className='pb-1'>
                       <a href={e.url}>
                         {e.name}
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default FourDivider
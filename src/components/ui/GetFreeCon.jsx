import React from 'react'
import icon from '../../assets/Team Final_1_1.webp'
function GetFreeCon() {
    return (
        <div className='w-9/12 mx-auto flex mt-4'>
            <div className='flex'>
                <img src={icon} alt="logo" />
            </div>
            <div className='flex ml-9 flex-col'>
                <h1 className=' text-black text-xl font-bold'>Don't know what to do?</h1>
                <h1 className='text-orange-500 text-lg font-semibold'>Get Free Counselling</h1>
            </div>
        </div>
    )
}

export default GetFreeCon
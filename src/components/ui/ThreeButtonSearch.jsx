import React from 'react'

function ThreeButtonSearch({ title, desc, url, color, btnText, lastText,colorText }) {
    return (
        <div className={`w-full mt-6 py-5 pb-10 ${color} `}>
            <div className={`w-10/12 mx-auto flex flex-col`}>
                <h1 className={`text-center text-3xl font-bold py-3 ${colorText}`}>{title}</h1>
                <p className={`text-center mb-5 ${colorText}`}>{desc}</p>
                <div>
                    <form className='flex justify-between' action={url} method="post">
                        <div className='w-4/12 bg-white'>
                            <select class="form-select py-3 w-[99%] pl-3  bg-white " aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='w-4/12 bg-white'>
                            <select class="form-select py-3 w-[99%] pl-3  bg-white " aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='bg-orange-400 w-3/12 flex justify-center align-middle'>
                            <button className='text-white text-center' type="submit">{btnText}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ThreeButtonSearch
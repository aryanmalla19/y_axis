import React from 'react'

function ThreeButtonSearch({ title, desc, url, color, btnText, lastText }) {
    return (
        <div className={`w-full py-5 ${color}`}>
            <div className='w-10/12 mx-auto flex flex-col'>
                <h1 className='text-center text-3xl font-semibold text-white py-3'>{title}</h1>
                <p className='text-center mb-5 text-white'>{desc}</p>
                <div>
                    <form className='flex justify-between' action={url} method="post">
                        <div className='py-3 pl-3 pr-2 w-4/12 bg-white'>
                        <select class="form-select " aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                        <div className='py-3 pl-3 pr-2 w-4/12 bg-white'>
                        <select class="form-select " aria-label="Default select example">
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
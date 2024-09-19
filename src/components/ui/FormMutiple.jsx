import React from 'react'

function FormMutiple({ title, desc, url, component }) {
    return (
        <form method={`${url}`} className='flex flex-col py-5'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='pt-2'>{desc}</p>
            {component}
        
            <h1 className='font-semibold pb-2 text-xl'>You can contact me at</h1>
            <div className='flex justify-between'>
                <select class="form-select border-b pb-2" aria-label="Country code select">
                    <option value="+1">United States (+1)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+977" selected>Nepal (+977)</option>
                </select>
                <input className='w-7/12 border-b pb-2' type="text" name="phone_number" id="phone_number" placeholder='Mobile No.' />
            </div>
            <div className='flex py-4'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label ml-3" for="inlineCheckbox1">Use this as Whatsapp number</label>
                </div>
            </div>
            <div className='flex justify-between'>
                <select class="form-select border-b pb-2" aria-label="Country code select">
                    <option value="+1">United States (+1)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+977" selected>Nepal (+977)</option>
                </select>
                <input className='w-7/12 border-b pb-2' type="text" name="phone_number" id="phone_number" placeholder='Mobile No.' />
            </div>
            <div className='flex py-4'>
                <h1 className='font-medium w-2/12'>and Email</h1>
                <input className='w-9/12 ml-12 border-b' type="text" name="email" id="email" placeholder='Email ID' />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label ml-2" for="flexCheckChecked">

                    I accept the <a className=' text-blue-400' href="">Terms & Conditions</a>
                </label>
            </div>
            <button className='w-11/12 mx-auto text-center bg-blue-600 text-white py-2 mt-3' type="submit">Submit</button>
        </form>
    )
}

export default FormMutiple
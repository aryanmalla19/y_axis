import React from 'react';
import GetFreeCon from './GetFreeCon';

function FormMutiple({ title, desc, url, component }) {
  return (
    <form action={url} method="POST" className='flex w-11/12 mx-auto flex-col py-5'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='pt-3'>{desc}</p>
      {component}

      <h1 className='font-semibold py-3 text-xl'>You can contact me at</h1>
      <div className='flex justify-between'>
        <select className="form-select border-b pb-3" aria-label="Country code select">
          <option value="+1">United States (+1)</option>
          <option value="+44">United Kingdom (+44)</option>
          <option value="+91">India (+91)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+81">Japan (+81)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+977" selected>Nepal (+977)</option>
        </select>
        <input className='w-7/12 border-b pb-3' type="text" name="phone_number" id="phone_number" placeholder='Mobile No.' />
      </div>
      
      <div className='flex py-3'>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
          <label className="form-check-label ml-3" htmlFor="inlineCheckbox1">Use this as Whatsapp number</label>
        </div>
      </div>
      
      <div className='flex justify-around pb-3'>
        <h1 className='font-medium text-lg w-2/12'>and Email</h1>
        <input className='w-9/12 border-b' type="email" name="email" id="email" placeholder='Email ID' />
      </div>

      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
        <label className="form-check-label ml-2" htmlFor="flexCheckChecked">
          I accept the <a className='text-blue-400' href="/terms-and-conditions">Terms & Conditions</a>

        </label>
      </div>
      
      <button className='w-11/12 mx-auto text-center bg-blue-600 text-white py-2 mt-3' type="submit">Submit</button>
        <div className='w-full'>
        <GetFreeCon/>
        </div>
    </form>
  );
}

export default FormMutiple;

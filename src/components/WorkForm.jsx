import React from 'react';
import PictureWithSidebar from './ui/PictureWithSidebar';
import FormMutiple from './ui/FormMutiple';

function WorkForm() {
    const formCurrent = (
        <h1 className="py-2 font-medium">
            I am <input className="ml-2 font-normal border-b" type="text" name="name" id="name" placeholder="Name" /> looking to work in <br />
            <select className="form-select pt-1 mt-2 font-normal w-10/12 border-b pb-1" aria-label="Country select" defaultValue="">
                <option value="" disabled>Select country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Maldives">Maldives</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Afghanistan">Afghanistan</option>
            </select>
        </h1>
    );

    return (
        <div className="flex border mt-4 justify-between">
            <div className="w-7/12">
                <PictureWithSidebar 
                    width="w-full" 
                    color="bg-red-600" 
                    url="https://www.y-axis.ae/assets/cms/2023-08/Work%20Y-Axis%20Dubai.webp" 
                />
            </div>
            <div className="w-5/12">
                <FormMutiple 
                    title="Work" 
                    component={formCurrent} 
                    desc="Want to Work Overseas? Avail our Job Search Services" 
                />
            </div>
        </div>
    );
}

export default WorkForm;

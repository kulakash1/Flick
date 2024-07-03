import React from 'react';

export const FilterSelection = () => {
    const arr = ["India", "Japan", "America", "England", "Pakistan"];

    return (
        <div className='text-white bg-transparent'>
            <select className='border w-[500px] rounded-3xl bg-transparent' name="country" id="country">
                <option value="1" className='bg-[#352D39]'>Country</option>
                {arr.map((item, index) => (
                    <option key={index} value={item} className='bg-[#352D39]'>{item}</option>
                ))}
            </select>
        </div>
    );
};

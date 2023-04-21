import React from 'react';

export const Category = ({ title, src }) => {
  return (
    <div className='lg:w-auto w-[315px] snap-start'>
      <img className='w-full' src={src} alt='' />
      <div className='w-full px-5 pt-5 pb-[25px] rounded-b-[20px] bg-gray'>
        <h2 className='text-[16px] text-white font-semibold leading-[140%] capitalize'>{title}</h2>
      </div>
    </div>
  );
};

import React from 'react';

export const InfoCard = ({src, title, desc}) => {
  return (
    <div className='p-5 bg-gray rounded-[20px] flex items-center gap-x-5 md:flex-col'>
      <img className='w-[100px]' src={src} alt='' />
      <div className='md:text-center'>
        <h3 className='text-white text-base leading-[140%] font-semibold mb-[10px]'>
          {title}
        </h3>
        <p className='text-grayLight text-xs font-normal'>
          {desc}
        </p>
      </div>
    </div>
  );
};

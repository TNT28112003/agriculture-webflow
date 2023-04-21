import React from 'react';

export const InfoCard = ({src, title, desc}) => {
  return (
    <div className='lg:px-[30px] p-5 bg-gray rounded-[20px] flex items-center gap-x-5 md:flex-col'>
      <img className='lg:w-[250px] w-[100px]' src={src} alt='' />
      <div className='md:text-center'>
        <h3 className='lg:text-[22px] text-white text-base leading-[140%] font-semibold mb-[10px]'>
          {title}
        </h3>
        <p className='lg:test-base text-grayLight text-xs font-normal'>
          {desc}
        </p>
      </div>
    </div>
  );
};

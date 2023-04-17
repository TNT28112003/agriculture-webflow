import React from 'react';

export const TrendingCollection = (props) => {
  return (
    <div className='w-[315px] snap-start'>
      <img className='w-[315px]' src={props.srcPrimary} alt='' />
      <div className='flex items-center justify-between mt-[15px]'>
        <img src={props.src1} alt='' />
        <img src={props.src2} alt='' />
        <img src={props.src3} alt='' />
      </div>
      <h3 className='text-[22px] text-white font-semibold leading-[140%] capitalize mt-[15px] mb-[10px]'>
        DSGN Animals
      </h3>
      <div className='flex items-center gap-x-3'>
        <img className='w-[24px]' src={props.avatar} alt='' />
        <h6 className='text-[16px] text-white font-normal leading-[140%] capitalize'>MrFox</h6>
      </div>
    </div>
  );
};

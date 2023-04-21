import React from 'react';

export const TopRatedArtists = (props) => {
  return (
    <div className='p-5 rounded-[20px] bg-gray flex items-center gap-x-5 lg:flex-col lg:text-center lg:gap-y-[10px]'>
      <img className='lg:w-[100px] w-[60px]' src={props.src} alt='' />
      <div>
        <h3 className='text-[22px] text-white font-semibold leading-[140%] capitalize'>
          {props.title}
        </h3>
        <h6 className='text-[16px] text-grayLight font-normal leading-[140%] capitalize'>
          Total sales: <span className='text-white font-spaceMono'>{props.price} ETH</span>
        </h6>
      </div>
    </div>
  );
};

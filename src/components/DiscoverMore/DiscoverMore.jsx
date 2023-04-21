import React from 'react';

export const DiscoverMore = (props) => {
  return (
    <div className='lg:w-full w-[315px] snap-start'>
      <img className='w-full' src={props.src} alt='' />
      <div className='w-full bg-gray px-5 pt-5 pb-[25px] rounded-b-[20px]'>
        <h2 className='text-[22px] text-white font-semibold leading-[140%] capitalize'>
          {props.title}
        </h2>
        <div className='flex items-center gap-x-3 mb-[27px]'>
          <img className='w-[24px]' src={props.avatar} alt='' />
          <h6 className='font-spaceMono text-[16px] text-white font-normal leading-[140%] capitalize'>
            {props.name}
          </h6>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <h6 className='font-spaceMono text-[12px] text-grayLight font-normal leading-[110%] mb-2 capitalize'>
              Price
            </h6>
            <p className='font-spaceMono text-[12px] text-white font-normal leading-[110%] capitalize'>
              1.63 ETH
            </p>
          </div>
          <div className='text-right'>
            <h6 className='font-spaceMono text-[12px] text-grayLight font-normal leading-[110%] mb-2 capitalize'>
              Highest Bid
            </h6>
            <p className='font-spaceMono text-[12px] text-white font-normal leading-[110%] capitalize'>
              0.33 wETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

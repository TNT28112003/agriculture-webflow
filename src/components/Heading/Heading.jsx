import React from 'react';
import { Button } from '../Button/Button';
import { RocketLaunch } from '../../import/assets';

export const Heading = (props) => {
  return (
    <div className='mb-[40px]'>
      <h2 className='text-[28px] text-white font-semibold leading-[140%] capitalize'>
        {props.title}
      </h2>
      <div className='md:flex md:items-center md:justify-between'>
        <h6 className='text-base font-normal leading-[140%] text-white mt-[10px] md:w-[343px]'>
          {props.subTitle}
        </h6>
        {props.disiable ? (
          <></>
        ) : (
          <div className='hidden md:block'>
            <Button icon={RocketLaunch} title='View Rankings' size='m' />
          </div>
        )}
      </div>
    </div>
  );
};

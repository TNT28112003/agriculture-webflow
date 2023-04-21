import React from 'react';
import { Logo, Menu, RocketLaunch } from '../../../import/assets';
import { Button } from '../../Button/Button';

export const Header = () => {
  return (
    <header className='px-[30px] py-[15px] lg:px-[50px]'>
      <nav className='flex items-center justify-between'>
        <div>
          <img className='lg:w-[243px] w-[183]' src={Logo} alt='' />
        </div>
        <div className='lg:block md:hidden hidden'>
          <ul className='flex items-center gap-x-[10px]'>
            <li className='text-white text-base font-semibold leading-[140%]'>
              <a className='pt-3 px-5' to='#'>
                Marketplace
              </a>
            </li>
            <li className='text-white text-base font-semibold leading-[140%]'>
              <a className='pt-3 px-5' to='#'>
                Rankings
              </a>
            </li>
            <li className='text-white text-base font-semibold leading-[140%]'>
              <a className='pt-3 px-5' to='#'>
                Connect a wallet
              </a>
            </li>
            <li>
              <Button icon={RocketLaunch} title='Sign up' size='m' />
            </li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <img className='w-[24px]' src={Menu} alt='' />
        </div>
      </nav>
    </header>
  );
};

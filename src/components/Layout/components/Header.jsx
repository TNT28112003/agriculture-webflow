import React from 'react';
import { Logo, Menu } from '../../../import/assets';

export const Header = () => {
  return (
    <header className='px-[30px] py-[15px]'>
      <nav className='flex items-center justify-between'>
        <div>
          <img className='w-[183]' src={Logo} alt='' />
        </div>
        <div>
          <img className='w-[24px]' src={Menu} alt='' />
        </div>
      </nav>
    </header>
  );
};

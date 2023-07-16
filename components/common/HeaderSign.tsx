import React from 'react';
import Link from 'next/link';

import { LogoIcon, AngleDownIcon } from '../../assets/Icons/Icons';

type Props = {};

// header signin sign up and forgetpass cpn
const HeaderSign = (props: Props) => {
  return (
    <div className='w-full h-[7rem] items-center flex justify-around'>
      <div className='flex items-center '>
        <LogoIcon width='1.6rem' height='1.6rem' />
        <Link
          href='/'
          className='ml-1.5 text-xs font-bold text-grayscaleGray leading-[1.8rem]'
        >
          Meetmax
        </Link>
      </div>

      <div className='flex w-[9.5rem] h-[2.4rem] shadow-sm shadow-[rgba(0, 0, 0, 0.04)] items-center'>
        <p className='text-[#4E5D78] text-[1rem] ml-[1rem] rounded-[4px]'>
          English (UK)
        </p>
        <AngleDownIcon
          width='1.2rem'
          height='1.2rem'
          className='ml-1.5 text-grayscaleGray'
        />
      </div>
    </div>
  );
};

export default HeaderSign;

import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';
import Hamburger from './hamburger';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-screen-desktop px-5 lg:px-10 desktop:px-16'>
        <header
          className={clsx(
            'flex items-center justify-between gap-x-10 py-5 lg:py-10',
            `mixin/hamburger:multi-['hidden;max-[720px]:block'] mixin/menu:max-[720px]:hidden`
          )}
        >
          <Nav className='mixin/menu' />
          <div className='mixin/hamburger -translate-y-2 self-baseline'>
            <Hamburger />
          </div>
          <a
            href={process.env.NEXT_PUBLIC_COIN_URL}
            target='_buy'
            className={clsx(
              'inline-block shrink-0 rounded-full border-[3px] border-black bg-primary px-5 py-1.5 text-2xl font-bold text-secondary transition btn-shadow',
              `hover:multi-['text-primary;bg-secondary']`
            )}
          >
            Buy $Apeinu
          </a>
        </header>
      </div>
    </div>
  );
}

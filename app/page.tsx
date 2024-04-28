import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-screen-desktop px-5 lg:px-10 desktop:px-16'>
        <header className='flex items-center justify-between gap-x-10 py-10'>
          <Nav />
          <a
            href={process.env.NEXT_PUBLIC_COIN_URL}
            target='_buy'
            className={clsx(
              'inline-block shrink-0 rounded-full border-[3px] border-black bg-primary px-5 py-1.5 text-2xl font-bold text-secondary transition btn-shadow'
            )}
          >
            Buy $Apeinu
          </a>
        </header>
      </div>
    </div>
  );
}

import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';
import Hamburger from './hamburger';
import Social from './social';

import bird1Img from './bird-1.png';
import cloud1Img from './cloud-1.png';
import cloud2Img from './cloud-2.png';
import cloud3Img from './cloud-3.png';
import monkey1Img from './monkey-1.svg';
import monkey2Img from './monkey-2.png';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div
        id='home'
        className='mx-auto max-w-screen-desktop px-5 lg:px-10 desktop:px-16'
      >
        <header
          className={clsx(
            'flex items-center justify-between gap-x-10 py-5 lg:py-10',
            `mixin/hamburger:multi-['hidden;max-[720px]:block'] mixin/menu:max-[720px]:hidden`
          )}
        >
          <Nav className='mixin/menu' />
          <div className='mixin/hamburger -translate-x-1 -translate-y-2 self-baseline'>
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

      <div className='mx-auto mt-3 max-w-screen-desktop px-5 md:mt-5 lg:mt-5 lg:px-10 desktop:px-16'>
        <div className='flex items-center justify-between gap-x-10'>
          <Image
            src={bird1Img}
            alt=''
            className='-ml-10 w-[128px] shrink-0 -scale-x-100 lg:-ml-28'
          />
          <div className='max-md:invisible max-sm:w-[150px]'>
            <Image src={cloud1Img} alt='' className='md:w-[274px]' />
          </div>
          <div>
            <Image src={cloud2Img} alt='' className='md:w-[279px]' />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'relative z-10 mx-auto mt-10 max-w-screen-desktop px-5 sm:mt-0 lg:mt-5 lg:px-10 desktop:px-16',
          'flex justify-between gap-x-5 sm:gap-x-10 lg:gap-x-20'
        )}
      >
        <div className='flex-[1_0_200px] max-[720px]:hidden'>
          <Image src={monkey1Img} quality={100} priority alt='' />
        </div>
        <hgroup className='space-y-5 overflow-hidden text-center sm:space-y-10 sm:pt-10 lg:space-y-14 lg:pt-14'>
          <h1 className='whitespace-nowrap font-boldie-slab text-6xl font-medium text-secondary sm:text-7xl md:text-8xl lg:text-9xl'>
            Apeinu
          </h1>
          <div className='text-2xl font-bold lg:text-[30px]'>
            <p className='uppercase'>Contract Address:</p>
            <p className='break-words'>
              {process.env.NEXT_PUBLIC_COIN_ADDRESS}
            </p>
          </div>
        </hgroup>
        <div className='shrink-0 space-y-10'>
          <Social
            image='/twitter.svg'
            href={process.env.NEXT_PUBLIC_TWITTER_URL}
            target='_twitter'
          />
          <Social
            image='/telegram.svg'
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
            target='_telegram'
          />
        </div>
      </div>

      <div
        className={clsx(
          'relative z-0 mx-auto mt-28 max-w-screen-desktop px-5 lg:mt-28 lg:px-10 xl:mt-12 desktop:px-16',
          'flex gap-x-10 xl:gap-x-36'
        )}
      >
        <div
          className={clsx(
            'shrink-0 self-center text-balance text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-[32px]',
            'max-[550px]:multi-["absolute;inset-0;z-10;size-full;px-5;flex;flex-col;items-end;text-2xl"]'
          )}
        >
          <p>GET YOURSELF READY!</p>
          <p>THE Apeinu MEME COIN IS HERE!</p>
        </div>
        <div className='relative'>
          <Image
            src={cloud3Img}
            alt=''
            className='absolute -top-10 left-0 w-[274px] max-w-[50%] lg:-left-10 lg:-top-20 xl:w-[345px]'
          />
          <Image
            src={monkey2Img}
            quality={100}
            priority
            alt=''
            className='-scale-x-100'
          />
        </div>
        <Image
          src={bird1Img}
          alt=''
          className='absolute -top-32 right-16 w-[105px] lg:-top-48'
        />
      </div>
    </div>
  );
}

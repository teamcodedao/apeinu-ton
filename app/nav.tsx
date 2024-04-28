'use client';

import clsx from 'clsx';

import {useHash} from '@/lib/use-hash';
import {useMounted} from '@/lib/use-mounted';

interface NavProps extends React.ComponentProps<'menu'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger}: NavProps) {
  const isMounted = useMounted();
  const hash = useHash();

  return (
    <menu
      className={clsx(className, `[&_a]:multi-['block;transition']`, {
        [clsx(
          `[&_a]:multi-['text-3xl;[&:hover]:text-secondary;py-2']`,
          '[&_a[aria-current=true]]:text-secondary'
        )]: isHamburger,
        [clsx(
          'flex text-primary',
          'gap-x-5 lg:gap-x-10',
          'text-2xl',
          `[&_a]:multi-['inline-block;bg-secondary;rounded-full;border-[3px];border-black;font-bold;px-6;py-1.5;btn-shadow']`,
          `hover:[&_a:hover]:multi-['text-secondary;bg-primary']`,
          {
            "[&_a[aria-current=true]]:multi-['text-secondary;bg-primary']":
              isMounted,
          }
        )]: !isHamburger,
      })}
    >
      <li>
        <a href='/#home' aria-current={!hash || hash === '#home'}>
          Home
        </a>
      </li>
      <li>
        <a href='/#about' aria-current={hash === '#about'}>
          About
        </a>
      </li>
      <li>
        <a href='/#tokenomics' aria-current={hash === '#tokenomics'}>
          Tokenomics
        </a>
      </li>
    </menu>
  );
}

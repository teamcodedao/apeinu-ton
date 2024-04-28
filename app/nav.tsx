import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'menu'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger}: NavProps) {
  return (
    <menu
      className={clsx(className, {
        '': isHamburger,
        [clsx(
          'flex text-primary',
          'gap-x-10',
          'text-2xl',
          `[&_a]:multi-['inline-block;bg-secondary;rounded-full;border-[3px];border-black;font-bold;px-6;py-1.5;btn-shadow;transition']`
        )]: !isHamburger,
      })}
    >
      <li>
        <a href='/#'>Home</a>
      </li>
      <li>
        <a href='/#about'>About</a>
      </li>
      <li>
        <a href='/#tokenomics'>Tokenomics</a>
      </li>
    </menu>
  );
}

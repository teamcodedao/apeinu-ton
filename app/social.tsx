import clsx from 'clsx';

interface SocialProps extends React.ComponentProps<'a'> {
  image: string;
}

export default function Social({
  children,
  className,
  image,
  ...rest
}: SocialProps) {
  return (
    <a
      {...rest}
      className={clsx(
        className,
        'block rounded-[1.8rem] border-2 border-black bg-primary p-3 transition btn-shadow lg:p-4',
        '[&_img]:transition',
        "[&:hover_img]:multi-['scale-x-[-1]']"
      )}
    >
      <img src={image} alt='' />
    </a>
  );
}

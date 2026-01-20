'use client';
import cn from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { click } from '@/utils/audio';
import Link from 'next/link';

interface HeaderButtonProps extends React.ComponentPropsWithRef<'button'> {
  text: string;
  href: string;
}

function HeaderButton({ text, href, className, ...inputs }: HeaderButtonProps) {
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        click.play();
      }}
      className={cn(
        'bg-dim h-fit min-w-28 rounded-lg',
        {
          'bg-dark': pathname === href,
        },
        className,
      )}
      {...inputs}
    >
      <Link
        href={href}
        className={cn(
          'bg-base border-dark block size-full -translate-y-1.5 cursor-pointer rounded-lg border-x border-t-2 p-2 font-bold',
          'size-full text-white transition-transform ease-in-out',
          {
            'bg-dim -translate-y-1': pathname === href,
            'hover:-translate-y-2': pathname !== href,
          },
        )}
      >
        {text}
      </Link>
    </button>
  );
}

export default HeaderButton;

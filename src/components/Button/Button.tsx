import cn from '@/utils/cn';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  text: string;
  backClassName?: string;
}

function Button({
  text,
  className,
  backClassName = '',
  ...inputs
}: ButtonProps) {
  return (
    <button className={cn('bg-dim rounded-lg', className)} {...inputs}>
      <span
        className={cn(
          'bg-base block size-full -translate-y-1.5 cursor-pointer rounded-lg p-4 font-bold',
          'text-white transition-transform ease-in-out hover:-translate-y-2 active:-translate-y-0.5',
          backClassName,
        )}
      >
        {text}
      </span>
    </button>
  );
}

export default Button;

import cn from '@/utils/cn';

function Input({ className, ...inputs }: React.ComponentPropsWithRef<'input'>) {
  return (
    <input
      className={cn(
        'outline-dim focus:outline-base rounded-lg px-4 py-2 outline-2',
        className,
      )}
      {...inputs}
    />
  );
}

export default Input;

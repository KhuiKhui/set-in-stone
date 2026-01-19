// interface SpreadsheetProps extends React.ComponentPropsWithRef<'div'> {}

import cn from '@/utils/cn';

function Spreadsheet({
  className,
  ...inputs
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div className="bg-dim size-full rounded-lg px-1 pb-1.5">
      <div
        className={cn(
          'block size-full translate-y-1.5 rounded-md p-4 font-bold',
          'bg-[url(/stone-bg.png)] bg-cover bg-no-repeat',
          className,
        )}
        {...inputs}
      >
        okay
      </div>
    </div>
  );
}

export default Spreadsheet;

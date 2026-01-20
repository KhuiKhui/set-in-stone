// interface SpreadsheetProps extends React.ComponentPropsWithRef<'div'> {}

import cn from '@/utils/cn';
import Cell from './Cell/Cell';

function Spreadsheet({
  className,
  ...inputs
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'block size-full translate-y-1.5 p-4 font-bold',
        'grid grid-cols-25 grid-rows-32 gap-0.5 overflow-auto bg-transparent',
        className,
      )}
      {...inputs}
    >
      <div></div>
      {Array.from({ length: 24 }).map((_: unknown, index: number) => {
        return (
          <div
            key={'hours' + index}
            className="text-center"
          >{`${index}:00`}</div>
        );
      })}
      {Array.from({ length: 25 * 31 }).map((_: unknown, index: number) => {
        return (
          <div key={'cell' + index}>
            {index % 25 == 0 ? (
              <div key={`${index} date`}>{`${index / 25 + 1}/1/26`}</div>
            ) : (
              <Cell row={index % 31} col={(index % 25) - 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Spreadsheet;

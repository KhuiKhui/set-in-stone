'use client';
import cn from '@/utils/cn';
import Cell from './Cell/Cell';
import { useAtomValue } from 'jotai';
import { monthAtom, yearAtom } from '@/store';
import { months } from '@/constants/months';

function Spreadsheet({
  className,
  ...inputs
}: React.ComponentPropsWithRef<'div'>) {
  const month = useAtomValue(monthAtom);
  const year = useAtomValue(yearAtom);
  return (
    <div
      className={cn(
        'block size-full translate-y-1.5 py-6 font-bold',
        'grid grid-cols-25 grid-rows-32 gap-[0.5px] overflow-auto bg-transparent',
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
      {Array.from({
        length: 25 * (year % 4 === 0 && month === 1 ? 29 : months[month].days),
      }).map((_: unknown, index: number) => {
        return (
          <div key={'cell' + index}>
            {index % 25 == 0 ? (
              <div
                key={`${index} date`}
              >{`${index / 25 + 1}/${months[month].num}/${year % 100}`}</div>
            ) : (
              <Cell row={Math.floor(index / 25)} col={(index % 25) - 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Spreadsheet;

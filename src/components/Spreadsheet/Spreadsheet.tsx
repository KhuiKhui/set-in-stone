'use client';
import cn from '@/utils/cn';
import Cell from './Cell/Cell';
import { useAtomValue, useSetAtom } from 'jotai';
import { gridAtom, monthAtom, yearAtom } from '@/store';
import { months } from '@/constants/months';
import { getDays } from '@/utils/days';
import { useEffect } from 'react';

function Spreadsheet({
  className,
  ...inputs
}: React.ComponentPropsWithRef<'div'>) {
  const month = useAtomValue(monthAtom);
  const year = useAtomValue(yearAtom);
  const setGrid = useSetAtom(gridAtom);

  useEffect(() => {
    if (localStorage.getItem('spreadsheet')) {
      setGrid(JSON.parse(localStorage.getItem('spreadsheet')!));
    } else {
      console.log('DEL');
      setGrid([
        Array.from({ length: 31 }, () => Array.from({ length: 24 }, () => '')),
      ]);
    }
  }, []);

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
            className="text-center text-sm"
          >{`${index}:00`}</div>
        );
      })}
      {Array.from({
        length: 25 * getDays(month, year),
      }).map((_: unknown, index: number) => {
        return (
          <div key={'cell' + index}>
            {index % 25 == 0 ? (
              <div
                key={`${index} date`}
                className="text-center text-sm"
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

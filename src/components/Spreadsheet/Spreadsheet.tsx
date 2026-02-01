'use client';
import cn from '@/utils/cn';
import Cell from './Cell/Cell';
import { useAtomValue, useAtom } from 'jotai';
import { gridAtom, monthAtom, yearAtom } from '@/store';
import { months } from '@/constants/months';
import { getDays } from '@/utils/days';
import { useEffect, useState } from 'react';
import { click } from '@/utils/audio';

function Spreadsheet({
  className,
  ...inputs
}: React.ComponentPropsWithRef<'div'>) {
  const month = useAtomValue(monthAtom);
  const year = useAtomValue(yearAtom);
  const [grid, setGrid] = useAtom(gridAtom);
  const [draggingCoords, setDraggingCoords] = useState<{
    row: number;
    col: number;
    value: string;
  } | null>(null);
  const [isClickable, setClickable] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('spreadsheet')) {
      setGrid(JSON.parse(localStorage.getItem('spreadsheet')!));
    } else {
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
        const row = Math.floor(index / 25);
        const col = (index % 25) - 1;
        return (
          <div
            key={'cell' + index}
            onMouseDown={() => {
              setDraggingCoords({
                row: row,
                col: col,
                value: grid[month + (year - 2026) * 12][row][col],
              });
              setClickable(true);
            }}
            onMouseUp={() => {
              setDraggingCoords(null);
              click.play();
            }}
          >
            {index % 25 == 0 ? (
              <div
                key={`${index} date`}
                className="text-center text-sm"
              >{`${index / 25 + 1}/${months[month].num}/${year % 100}`}</div>
            ) : (
              <Cell
                row={row}
                col={col}
                draggingCoords={draggingCoords}
                setClickable={setClickable}
                isClickable={isClickable}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Spreadsheet;

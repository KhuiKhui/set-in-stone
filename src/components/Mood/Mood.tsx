'use client';
import cn from '@/utils/cn';
import Cell from './Cell';
import { useAtomValue, useAtom } from 'jotai';
import { gridAtom, monthAtom, yearAtom } from '@/stores/moodStore';
import { months } from '@/constants/months';
import { useEffect, useState } from 'react';
import { click } from '@/utils/audio';

function Mood({ className, ...inputs }: React.ComponentPropsWithRef<'div'>) {
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
    if (localStorage.getItem('mood')) {
      setGrid(JSON.parse(localStorage.getItem('mood')!));
    } else {
      setGrid([
        Array.from({ length: 31 }, () => Array.from({ length: 12 }, () => '')),
      ]);
    }
  }, []);

  return (
    <div
      className={cn(
        'block size-full translate-y-1.5 py-6 font-bold',
        'grid grid-cols-13 grid-rows-32 gap-[0.75px] overflow-auto bg-transparent',
        className,
      )}
      {...inputs}
    >
      <div className="m-auto">
        <div className="bg-dim size-fit rounded-lg px-4 text-center text-xs">
          {year}
        </div>
      </div>
      {Array.from({ length: 12 }).map((_: unknown, index: number) => {
        return (
          <div key={'hours' + index} className="text-center text-sm">
            {months[index].name.slice(0, 3)}
          </div>
        );
      })}
      {Array.from({
        length: 13 * 31,
      }).map((_: unknown, index: number) => {
        const row = Math.floor(index / 13);
        const col = (index % 13) - 1;
        return (
          <div
            key={'cell' + index}
            onMouseDown={() => {
              setDraggingCoords({
                row: row,
                col: col,
                value: grid[year - 2026][row][col],
              });
              setClickable(true);
            }}
            onMouseUp={() => {
              setDraggingCoords(null);
              click.play();
            }}
          >
            {index % 13 == 0 ? (
              <div
                key={`${index} date`}
                className="text-center text-sm"
              >{`Day ${index / 13 + 1}`}</div>
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

export default Mood;

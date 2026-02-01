'use client';
import cn from '@/utils/cn';
import { click } from '@/utils/audio';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  colorPickerAtom,
  colorPressedAtom,
  gridAtom,
  saveAtom,
  yearAtom,
} from '@/stores/moodStore';
import { produce } from 'immer';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface CellProps extends React.ComponentPropsWithRef<'button'> {
  row: number;
  col: number;
  draggingCoords: { row: number; col: number; value: string } | null;
  setClickable: Dispatch<SetStateAction<boolean>>;
  isClickable: boolean;
}

function Cell({
  className,
  row,
  col,
  draggingCoords,
  setClickable,
  isClickable,
  ...inputs
}: CellProps) {
  const [grid, setGrid] = useAtom<string[][][]>(gridAtom);
  const setSave = useSetAtom(saveAtom);
  const colorsPressed = useAtomValue(colorPressedAtom);
  const colors = useAtomValue(colorPickerAtom);
  const year = useAtomValue(yearAtom);
  const gridIndex = year - 2026;

  console.log(row, col);
  const isPressed = grid[gridIndex][row][col] !== '';

  let color: string = '';
  for (let i = 0; i < colorsPressed.length; i++) {
    if (colorsPressed[i]) color = colors[i];
  }
  return (
    <button
      onClick={() => {
        if (isClickable) {
          setGrid(
            produce((draft: string[][][]) => {
              draft[gridIndex][row][col] = isPressed ? '' : color;
            }),
          );
          setSave(true);

          click.play();
        }
      }}
      onMouseMove={() => {
        if (draggingCoords?.col === col) {
          setClickable(false);
          setGrid(
            produce((draft: string[][][]) => {
              if (draggingCoords.value === '') {
                draft[gridIndex][row][col] = color;
              } else {
                draft[gridIndex][row][col] = '';
              }
            }),
          );
          setSave(true);
        }
      }}
      className={cn(
        'bg-dim size-full rounded-lg',
        {
          'bg-dark': isPressed,
        },
        className,
      )}
      {...inputs}
    >
      <span
        className={cn(
          'bg-base border-dark block size-full -translate-y-1.5 cursor-pointer rounded-lg border-x border-t-2 p-4 font-bold',
          'size-full transition-transform ease-in-out',
          {
            // FUNCTIONS!!!!
            'bg-bright':
              row > -(1 / 36) * col ** 2 + (2 / 3) * col + 12 ||
              row < (1 / 36) * col ** 2 - (2 / 3) * col + 9,
            'bg-dim':
              row > -(1 / 36) * col ** 2 + (2 / 3) * col + 18 ||
              row < (1 / 36) * col ** 2 - (2 / 3) * col + 7,
            'bg-dark':
              row > -(1 / 36) * col ** 2 + (2 / 3) * col + 25 ||
              row < (1 / 36) * col ** 2 - (2 / 3) * col + 3,
          },
          {
            '-translate-y-1': isPressed,
            'hover:-translate-y-2': !isPressed,
            'hover:bg-very-negative-bright':
              !isPressed && color === 'very negative',
            'bg-very-negative-base hover:bg-very-negative-dim':
              isPressed && grid[gridIndex][row][col] === 'very negative',
            'hover:bg-negative-bright': !isPressed && color === 'negative',
            'bg-negative-base hover:bg-negative-dim':
              isPressed && grid[gridIndex][row][col] === 'negative',
            'hover:bg-normal-bright': !isPressed && color === 'normal',
            'bg-normal-base hover:bg-normal-dim':
              isPressed && grid[gridIndex][row][col] === 'normal',
            'hover:bg-positive-bright': !isPressed && color === 'positive',
            'bg-positive-base hover:bg-positive-dim':
              isPressed && grid[gridIndex][row][col] === 'positive',
            'hover:bg-very-positive-bright':
              !isPressed && color === 'very positive',
            'bg-very-positive-base hover:bg-very-positive-dim':
              isPressed && grid[gridIndex][row][col] === 'very positive',
          },
        )}
      ></span>
    </button>
  );
}

export default Cell;

'use client';
import cn from '@/utils/cn';
import { useState } from 'react';
import { click } from '@/utils/audio';
import { useAtom, useAtomValue } from 'jotai';
import { colorPickerAtom, colorPressedAtom, gridAtom } from '@/store';

interface CellProps extends React.ComponentPropsWithRef<'button'> {
  row: number;
  col: number;
}

function Cell({ className, row, col, ...inputs }: CellProps) {
  const [isPressed, setPressed] = useState(false);
  const [grid, setGrid] = useAtom<string[][]>(gridAtom);
  const colorsPressed = useAtomValue(colorPressedAtom);
  const colors = useAtomValue(colorPickerAtom);
  let color: string = '';
  for (let i = 0; i < colorsPressed.length; i++) {
    if (colorsPressed[i]) color = colors[i];
  }

  return (
    <button
      onClick={() => {
        if (isPressed)
          setGrid((grid: string[][]) => {
            grid[row][col] = '';
            return grid;
          });
        else
          setGrid((grid: string[][]) => {
            grid[row][col] = color;
            return grid;
          });

        setPressed(!isPressed);
        click.play();
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
            'hover:bg-study-bright': !isPressed && color === 'study',
            'bg-study-base hover:bg-study-dim':
              isPressed && grid[row][col] === 'study',
            'hover:bg-games-bright': !isPressed && color === 'games',
            'bg-games-base hover:bg-games-dim':
              isPressed && grid[row][col] === 'games',
            'hover:bg-sleep-bright': !isPressed && color === 'sleep',
            'bg-sleep-base hover:bg-sleep-dim':
              isPressed && grid[row][col] === 'sleep',
            'hover:bg-hangout-bright': !isPressed && color === 'hangout',
            'bg-hangout-base hover:bg-hangout-dim':
              isPressed && grid[row][col] === 'hangout',
            'hover:bg-exercise-bright': !isPressed && color === 'exercise',
            'bg-exercise-base hover:bg-exercise-dim':
              isPressed && grid[row][col] === 'exercise',
            'hover:bg-eat-bright': !isPressed && color === 'eat',
            'bg-eat-base hover:bg-eat-dim':
              isPressed && grid[row][col] === 'eat',
            'hover:bg-others-bright': !isPressed && color === 'others',
            'bg-others-base hover:bg-others-dim':
              isPressed && grid[row][col] === 'others',
          },
        )}
      ></span>
    </button>
  );
}

export default Cell;

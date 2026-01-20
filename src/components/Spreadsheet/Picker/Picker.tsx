'use client';

import { colorPickerAtom, colorPressedAtom } from '@/store';
import { useAtom } from 'jotai';
import cn from '@/utils/cn';
import { useState } from 'react';

interface PickerProps extends React.ComponentPropsWithRef<'div'> {
  category: string;
  index: number;
}

function Picker({
  category = 'study',
  index = 0,
  className,
  ...inputs
}: PickerProps) {
  const [color, setColor] = useAtom(colorPickerAtom);
  const [colorPressed, setColorPressed] = useAtom(colorPressedAtom);
  return (
    <div
      className={cn(
        'rounded-full',
        {
          'bg-sleep-dim': color[index] === 'sleep',
          'bg-games-dim': color[index] === 'games',
          'bg-study-dim': color[index] === 'study',
          'bg-others-dim': color[index] === 'others',
        },
        className,
      )}
      {...inputs}
    >
      <button
        onClick={() => {
          setColorPressed((colorPressed) => {
            colorPressed = [false, false, false, false];
            colorPressed[index] = true;
            return colorPressed;
          });
          setColor(() => {
            color[index] = category;
            return color;
          });
        }}
        className={cn(
          'block size-full min-w-24 -translate-y-0.5 cursor-pointer rounded-full p-4 font-bold',
          'size-full transition-transform ease-in-out',
          {
            '-translate-y-2': colorPressed[index],
            'hover:-translate-y-1': !colorPressed[index],
            'bg-sleep-base hover:bg-sleep-bright': color[index] === 'sleep',
            'bg-games-base hover:bg-games-bright': color[index] === 'games',
            'bg-study-base hover:bg-study-bright': color[index] === 'study',
            'bg-others-base hover:bg-others-bright': color[index] === 'others',
          },
        )}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    </div>
  );
}

export default Picker;

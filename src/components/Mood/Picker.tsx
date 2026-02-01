'use client';

import { colorPickerAtom, colorPressedAtom } from '@/stores/moodStore';
import { useAtom } from 'jotai';
import cn from '@/utils/cn';
import { click } from '@/utils/audio';

interface PickerProps extends React.ComponentPropsWithRef<'div'> {
  category: string;
  index: number;
}

function Picker({
  category = 'normal',
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
          'bg-very-negative-dim': color[index] === 'very negative',
          'bg-negative-dim': color[index] === 'negative',
          'bg-normal-dim': color[index] === 'normal',
          'bg-positive-dim': color[index] === 'positive',
          'bg-very-positive-dim': color[index] === 'very positive',
        },
        className,
      )}
      {...inputs}
    >
      <button
        onClick={() => {
          click.play();
          setColorPressed((colorPressed) => {
            colorPressed = [false, false, false, false, false, false, false];
            colorPressed[index] = true;
            return colorPressed;
          });
          setColor(() => {
            color[index] = category;
            return color;
          });
        }}
        className={cn(
          'block size-full min-w-24 -translate-y-1.5 cursor-pointer rounded-full px-4 py-2 font-bold',
          'text-dark size-full transition-transform ease-in-out',
          {
            '-translate-y-0.5': colorPressed[index],
            'hover:-translate-y-2': !colorPressed[index],
            'bg-very-negative-base hover:bg-very-negative-bright':
              color[index] === 'very negative',
            'bg-negative-base hover:bg-negative-bright':
              color[index] === 'negative',
            'bg-normal-base hover:bg-normal-bright': color[index] === 'normal',
            'bg-positive-base hover:bg-positive-bright':
              color[index] === 'positive',
            'bg-very-positive-base hover:bg-very-positive-bright':
              color[index] === 'very positive',
          },
        )}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    </div>
  );
}

export default Picker;

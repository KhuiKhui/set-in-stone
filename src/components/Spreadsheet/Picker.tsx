'use client';

import { colorPickerAtom, colorPressedAtom } from '@/stores/spreadsheetStore';
import { useAtom } from 'jotai';
import cn from '@/utils/cn';
import { click } from '@/utils/audio';

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
          'bg-hangout-dim': color[index] === 'hangout',
          'bg-exercise-dim': color[index] === 'exercise',
          'bg-eat-dim': color[index] === 'eat',
          'bg-others-dim': color[index] === 'others',
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
          'size-full transition-transform ease-in-out',
          {
            '-translate-y-0.5': colorPressed[index],
            'hover:-translate-y-2': !colorPressed[index],
            'bg-sleep-base hover:bg-sleep-bright': color[index] === 'sleep',
            'bg-games-base hover:bg-games-bright': color[index] === 'games',
            'bg-study-base hover:bg-study-bright': color[index] === 'study',
            'bg-hangout-base hover:bg-hangout-bright':
              color[index] === 'hangout',
            'bg-exercise-base hover:bg-exercise-bright':
              color[index] === 'exercise',
            'bg-eat-base hover:bg-eat-bright': color[index] === 'eat',
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

'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointRight,
  faHandPointLeft,
} from '@fortawesome/free-regular-svg-icons';
import { useAtom } from 'jotai';
import { gridAtom, yearAtom } from '@/stores/moodStore';
import cn from '@/utils/cn';

function NavArrows() {
  const [year, setYear] = useAtom(yearAtom);
  const [grid, addGrid] = useAtom(gridAtom);

  const leftDisabled = year === 2026;

  function onNext() {
    setYear(year + 1);
    if (grid.length <= year - 2026 + 1)
      addGrid((grid) => {
        const newGrid = [
          ...grid,
          Array.from(
            {
              length: 31,
            },
            () => Array.from({ length: 12 }, () => ''),
          ),
        ];
        return newGrid;
      });
  }

  function onPrev() {
    setYear(year - 1);
  }

  return (
    <div className="flex flex-row gap-4">
      <FontAwesomeIcon
        icon={faHandPointLeft}
        className={cn('size-6 bg-transparent', {
          'text-dim': leftDisabled,
          'text-fg hover:animate-shake hover:text-dim active:text-dark cursor-pointer transition-transform hover:scale-105':
            !leftDisabled,
        })}
        onClick={leftDisabled ? () => {} : onPrev}
      />
      <FontAwesomeIcon
        icon={faHandPointRight}
        className="text-fg hover:animate-shake hover:text-dim active:text-dark size-6 cursor-pointer bg-transparent transition-transform hover:scale-105"
        onClick={onNext}
      />
    </div>
  );
}

export default NavArrows;

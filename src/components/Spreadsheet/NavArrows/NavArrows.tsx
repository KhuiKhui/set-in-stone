'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointRight,
  faHandPointLeft,
} from '@fortawesome/free-regular-svg-icons';
import { useAtom } from 'jotai';
import { monthAtom, gridAtom, yearAtom } from '@/store';
import cn from '@/utils/cn';
import { getDays } from '@/utils/days';

function NavArrows() {
  const [month, setMonth] = useAtom(monthAtom);
  const [year, setYear] = useAtom(yearAtom);
  const [grid, addGrid] = useAtom(gridAtom);

  const leftDisabled = month === 0 && year === 2026;

  function onNext() {
    let newMonth = month + 1;
    if (month < 11) setMonth(newMonth);
    else {
      newMonth = 0;
      setMonth(0);
      setYear(year + 1);
    }
    if (grid.length <= month + (year - 2026 + 1) * 12 + 1)
      addGrid((grid) => {
        const newGrid = [
          ...grid,
          Array.from(
            {
              length: getDays(newMonth, year),
            },
            () => Array.from({ length: 24 }, () => ''),
          ),
        ];
        return newGrid;
      });
  }

  function onPrev() {
    if (month > 0) setMonth(month - 1);
    else {
      setMonth(11);
      setYear(year - 1);
    }
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

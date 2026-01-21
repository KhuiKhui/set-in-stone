'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointRight,
  faHandPointLeft,
} from '@fortawesome/free-regular-svg-icons';
import { useAtom } from 'jotai';
import { monthAtom, gridAtom, yearAtom } from '@/store';
import { useEffect, useState } from 'react';
import cn from '@/utils/cn';
import { months } from '@/constants/months';
import { produce } from 'immer';

function NavArrows() {
  const [month, setMonth] = useAtom(monthAtom);
  const [year, setYear] = useAtom(yearAtom);
  const [grids, addGrid] = useAtom(gridAtom);

  const leftDisabled = month === 0 && year === 2026;

  function onNext() {
    if (month < 11) setMonth(month + 1);
    else {
      setMonth(0);
      setYear(year + 1);
    }
    addGrid((grid) => {
      const newGrid = produce(grid, (draft) => {
        draft.push(
          Array.from(
            { length: year % 4 === 0 && month === 1 ? 29 : months[month].days },
            () => Array.from({ length: 24 }, () => ''),
          ),
        );
      });
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

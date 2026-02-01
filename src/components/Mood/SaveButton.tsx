'use client';
import Button from '@/components/Button/Button';
import { gridAtom, saveAtom } from '@/stores/moodStore';
import cn from '@/utils/cn';
import { saveSpreadsheet } from '@/utils/spreadsheet';
import { useAtom, useAtomValue } from 'jotai';
import { click } from '@/utils/audio';

function SaveButton({ ...inputs }: React.ComponentPropsWithRef<'button'>) {
  const grid = useAtomValue(gridAtom);
  const [save, setSave] = useAtom(saveAtom);
  return (
    <Button
      className={cn('mr-auto min-w-28', {
        'bg-gray-700': !save,
      })}
      backClassName={cn('px-4 py-2', {
        'bg-gray-500': !save,
      })}
      text={!save ? 'Saved' : 'Save'}
      onClick={
        !save
          ? () => {}
          : () => {
              saveSpreadsheet(grid);
              setSave(false);
              localStorage.setItem('spreadsheet', JSON.stringify(grid));
              click.play();
            }
      }
      {...inputs}
    />
  );
}

export default SaveButton;

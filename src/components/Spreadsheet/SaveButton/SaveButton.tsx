'use client';
import Button from '@/components/Button/Button';
import { gridAtom } from '@/store';
import cn from '@/utils/cn';
import { saveSpreadsheet } from '@/utils/spreadsheet';
import { useAtomValue } from 'jotai';

interface SaveButtonProps extends React.ComponentPropsWithRef<'button'> {
  backClassName: string;
}

function SaveButton({ className, backClassName, ...inputs }: SaveButtonProps) {
  const grid = useAtomValue(gridAtom);
  return (
    <Button
      className={cn('', className)}
      backClassName={backClassName}
      text="Save"
      onClick={() => saveSpreadsheet(grid)}
      {...inputs}
    />
  );
}

export default SaveButton;

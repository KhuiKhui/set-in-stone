import NavArrows from '@/components/Spreadsheet/NavArrows/NavArrows';
import PickerTray from '@/components/Spreadsheet/PickerTray/PickerTray';
import SaveButton from '@/components/Spreadsheet/SaveButton/SaveButton';
import Spreadsheet from '@/components/Spreadsheet/Spreadsheet';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-auto p-4">
      <Spreadsheet />

      <div className="flex w-full flex-row items-center justify-end gap-10">
        <SaveButton className="mr-auto min-w-28" backClassName="py-2" />
        <PickerTray />
        <NavArrows />
      </div>
    </div>
  );
}

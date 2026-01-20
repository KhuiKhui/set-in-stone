import PickerTray from '@/components/Spreadsheet/PickerTray/PickerTray';
import Spreadsheet from '@/components/Spreadsheet/Spreadsheet';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-auto p-4">
      <Spreadsheet />
      <PickerTray />
    </div>
  );
}

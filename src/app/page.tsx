import Picker from '@/components/Spreadsheet/Picker/Picker';
import PickerTray from '@/components/Spreadsheet/PickerTray/PickerTray';
import Spreadsheet from '@/components/Spreadsheet/Spreadsheet';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-8">
      <PickerTray />

      <Spreadsheet />
    </div>
  );
}

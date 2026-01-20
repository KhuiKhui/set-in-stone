import Picker from '@/components/Spreadsheet/Picker/Picker';
import Spreadsheet from '@/components/Spreadsheet/Spreadsheet';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-8">
      <div className="flex flex-row items-center justify-evenly gap-4">
        <Picker category="study" index={0} />
        <Picker category="games" index={1} />
        <Picker category="sleep" index={2} />
        <Picker category="others" index={3} />
      </div>

      <Spreadsheet />
    </div>
  );
}

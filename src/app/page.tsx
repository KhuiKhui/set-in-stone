import Spreadsheet from '@/components/Spreadsheet/Spreadsheet';
import Toolbar from '@/components/Spreadsheet/Toolbar';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-auto p-4">
      <Spreadsheet />
      <Toolbar />
    </div>
  );
}

import Mood from '@/components/Mood/Mood';
import Toolbar from '@/components/Mood/Toolbar';

export default function MoodTable() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-auto p-4">
      <Mood />
      <Toolbar />
    </div>
  );
}

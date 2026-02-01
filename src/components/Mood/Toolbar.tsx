import NavArrows from '@/components/Mood/NavArrows';
import PickerTray from './PickerTray';
import SaveButton from '@/components/Mood/SaveButton';
import { isInSession } from '@/utils/session';

async function Toolbar() {
  const inSession = await isInSession();
  return (
    <div className="flex w-full flex-row items-center justify-end gap-10">
      {inSession ? <SaveButton /> : <div />}
      <PickerTray />
      <NavArrows />
    </div>
  );
}

export default Toolbar;

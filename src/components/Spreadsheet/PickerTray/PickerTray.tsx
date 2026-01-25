import Picker from '../Picker/Picker';

function PickerTray() {
  return (
    <div className="flex flex-row items-center justify-evenly gap-4 self-end">
      <Picker category="study" index={0} />
      <Picker category="games" index={1} />
      <Picker category="sleep" index={2} />
      <Picker category="hangout" index={3} />
      <Picker category="exercise" index={4} />
      <Picker category="eat" index={5} />
      <Picker category="others" index={6} />
    </div>
  );
}

export default PickerTray;

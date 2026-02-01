import Picker from './Picker';

function PickerTray() {
  return (
    <div className="flex flex-row items-center justify-evenly gap-4 self-end">
      <Picker category="very negative" index={0} />
      <Picker category="negative" index={1} />
      <Picker category="normal" index={2} />
      <Picker category="positive" index={3} />
      <Picker category="very positive" index={4} />
    </div>
  );
}

export default PickerTray;

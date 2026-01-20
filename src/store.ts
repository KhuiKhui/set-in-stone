import { atom } from 'jotai';

export const colorPressedAtom = atom([true, false, false, false]);
export const colorPickerAtom = atom(['study', 'games', 'sleep', 'others']);
export const gridAtom = atom<any>(
  Array.from({ length: 31 }, () => Array.from({ length: 24 }, () => '')),
);

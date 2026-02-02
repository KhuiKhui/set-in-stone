import { atom } from 'jotai';

export const saveAtom = atom(false);

export const userAtom = atom({
  email: '',
  password: '',
});

export const hrefAtom = atom('/');

export const colorPressedAtom = atom([false, false, true, false, false]);

export const colorPickerAtom = atom([
  'very negative',
  'negative',
  'normal',
  'positive',
  'very positive',
]);

export const gridAtom = atom<string[][][]>([
  Array.from({ length: 31 }, () => Array.from({ length: 12 }, () => '')),
]);

export const monthAtom = atom<number>(0);
export const yearAtom = atom<number>(2026);

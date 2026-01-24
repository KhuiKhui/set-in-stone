import { atom } from 'jotai';

export const userAtom = atom({
  email: '',
  password: '',
});

export const hrefAtom = atom('/');

export const colorPressedAtom = atom([
  true,
  false,
  false,
  false,
  false,
  false,
  false,
]);

export const colorPickerAtom = atom([
  'study',
  'games',
  'sleep',
  'hangout',
  'exercise',
  'eat',
  'others',
]);

export const gridAtom = atom<string[][][]>([
  Array.from({ length: 31 }, () => Array.from({ length: 24 }, () => '')),
]);

export const monthAtom = atom<number>(0);
export const yearAtom = atom<number>(2026);

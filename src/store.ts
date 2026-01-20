import { atom } from 'jotai';

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

export const gridAtom = atom<string[][]>(
  Array.from({ length: 31 }, () => Array.from({ length: 24 }, () => '')),
);

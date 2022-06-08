import { selector } from 'recoil';
import { counterState } from './counterState';
export const counterStateSelector = selector({
  key: 'counterStateSelector',
  default: 0,
  get: ({ get }) => {
    return get(counterState) + ' !';
  },
});

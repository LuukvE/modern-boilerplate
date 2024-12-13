import { create } from 'zustand';

import { State, Theme } from '../types';

export default create<State>((set) => ({
  config: {
    theme: Theme.dark
  },
  users: {
    '630481d6-878b-4a58-b7fa-52861c547cff': {
      id: '630481d6-878b-4a58-b7fa-52861c547cff',
      name: 'Luuk'
    }
  },
  update: (payload) => set(() => ({ ...payload })),
  merge: (collection, payload) =>
    set((state) => ({
      ...state,
      [collection]: { ...state[collection], ...payload }
    })),
  add: (collection, id, payload) =>
    set((state) => ({
      ...state,
      [collection]: {
        ...state[collection],
        [id]: payload
      }
    }))
}));

export type ID = string;

export type Value = boolean | string | number | null | Date | undefined;

export interface Entity {
  [prop: string]: Value | Value[] | Entity | Entity[];
}

export enum Theme {
  dark = 'dark',
  light = 'light'
}

export type Memory = {
  users: Record<string, User>;
  config: {
    theme: Theme;
  };
  loaders: Record<string, boolean>;
};

export interface User extends Entity {
  id: ID;
  name: string;
}

export type State = Memory & {
  update: (payload: Partial<State>) => void;
  merge: <C extends keyof Memory>(collection: C, payload: Memory[C]) => void;
  add: <C extends keyof Memory>(collection: C, id: string, payload: Memory[C][keyof Memory[C]]) => void;
};

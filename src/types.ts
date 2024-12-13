export type ID = string;

export type Value = boolean | string | number | null | Date | undefined;

export interface Entity {
  [prop: string]: Value | Value[] | Entity | Entity[];
}

export enum Theme {
  dark = "dark",
  light = "light",
}

export type Memory = {
  users: Record<string, User>;
  config: {
    theme: Theme;
  };
};

export interface User extends Entity {
  id: ID;
  name: string;
}

export type State = Memory & {
  update: (payload: Partial<State>) => void;
  merge: <P>(collection: keyof Memory, payload: P) => void;
  add: <P>(
    collection: keyof Memory,
    id: string,
    payload: P,
  ) => void;
};

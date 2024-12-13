import { useCallback } from 'react';

import { Entity } from '../types';
import useStore from './useStore';

export default () => {
  const merge = useStore((state) => state.merge);

  const set = useCallback(async (url: string, body: Entity) => {
    try {
      merge('loaders', { [url]: true });

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
      });

      if (res.status >= 400) throw 'Loading error';

      const obj = await res.json();

      merge('loaders', { [url]: false });

      return obj;
    } catch (e) {
      merge('loaders', { [url]: false });
    }
  }, []);

  const get = useCallback(async (url: string) => {
    try {
      merge('loaders', { [url]: true });

      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include'
      });

      if (res.status >= 400) throw 'Loading error';

      const obj = await res.json();

      merge('loaders', { [url]: false });

      return obj;
    } catch (e) {
      merge('loaders', { [url]: false });
    }
  }, []);

  return {
    set,
    get
  };
};

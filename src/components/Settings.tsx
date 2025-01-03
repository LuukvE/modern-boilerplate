import { useCallback } from 'react';

import Button from '@/components/Button';
import useStore from '@/hooks/useStore';
import { Theme } from '@/types';

export default function Settings() {
  const { config, update } = useStore();

  const toggleTheme = useCallback(() => {
    const opposite: Record<string, string> = {
      light: 'dark',
      dark: 'light'
    };

    const theme = opposite[config.theme as string] as Theme;

    update({ config: { ...config, theme } });

    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [config]);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="mr-2 flex flex-col items-center">
        <small>Current mode:</small>
        <div className="capitalize">{config.theme}</div>
      </div>
      <Button className="ml-2" onClick={toggleTheme}>
        Switch
      </Button>
    </div>
  );
}

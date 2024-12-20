import { Route, Routes } from 'react-router-dom';

import Logo from '@/assets/logo.svg';
import NavButton from '@/components/NavButton';
import Settings from '@/components/Settings';
import Users from '@/components/Users';

export default function App() {
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <Logo className="w-6 fill-[#222] dark:fill-white" />
      </div>
      <h1 className="flex justify-center text-2xl font-bold leading-relaxed">React Boilerplate</h1>
      <nav className="mx-auto my-4 flex w-full max-w-96 gap-2">
        <NavButton to="/">Users</NavButton>
        <NavButton to="/settings">Settings</NavButton>
      </nav>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
}

import { Route, Routes } from 'react-router-dom';

import NavButton from './NavButton';
import Settings from './Settings';
import Users from './Users';
import logo from '/logo.svg';

export default function App() {
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <img src={logo} className="h-24 p-6 transition-all duration-300 hover:drop-shadow-sm" alt="Logo" />
      </div>
      <h1 className="flex justify-center text-2xl font-bold leading-relaxed">Modern Boilerplate</h1>
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

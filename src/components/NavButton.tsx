import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function NavButton({
  className,
  ...props
}: Omit<NavLinkProps, 'className'> & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'flex grow basis-0 cursor-pointer justify-center rounded-lg border border-transparent bg-black/10 px-4 py-2 text-lg font-medium transition-all duration-300 hover:border-[#646cff] focus:outline-4 focus:outline-[-webkit-focus-ring-color] dark:bg-black/30',
          className,
          isActive ? 'bg-black/5 dark:bg-black/15' : ''
        )
      }
      {...props}
    />
  );
}

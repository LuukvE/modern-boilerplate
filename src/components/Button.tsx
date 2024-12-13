import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

function Button({ className, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded-lg border border-transparent bg-black/10 px-4 py-2 text-lg font-medium transition-all duration-300 hover:border-[#646cff] focus:outline-4 focus:outline-[-webkit-focus-ring-color] dark:bg-black/30',
        className
      )}
      {...props}
    />
  );
}

export default Button;

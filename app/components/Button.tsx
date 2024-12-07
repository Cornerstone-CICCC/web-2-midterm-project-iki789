import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex gap-1 items-center py-2 px-4 rounded-full bg-transparent text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black dark:focus:bg-white dark:focus:text-black hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

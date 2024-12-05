import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex gap-1 items-center py-2 px-4 rounded-full bg-transparent text-white hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

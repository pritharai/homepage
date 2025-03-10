import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "default", className, ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition duration-300 focus:outline-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    danger: "bg-red-700 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;

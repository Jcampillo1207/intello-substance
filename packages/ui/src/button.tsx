import React from "react";
import * as RadixButton from "@radix-ui/react-primitive";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", ...props }, forwardedRef) => {
    return (
      <RadixButton.Primitive.button
        {...props}
        ref={forwardedRef}
        className={`px-4 py-2 rounded ${
          variant === "primary"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {children}
      </RadixButton.Primitive.button>
    );
  }
);

Button.displayName = "Button";

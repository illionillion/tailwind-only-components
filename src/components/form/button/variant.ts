import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  clsx(
    // Base styles
    "rounded",
    "transition-colors",
    "focus:outline-none",
    "select-none",

    // Disabled state
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "disabled:hover:bg-transparent",
    "disabled:active:bg-transparent",
    "disabled:hover:text-current",
    "disabled:active:text-current",
    "disabled:hover:border-current",
    "disabled:active:border-current"
  ),
  {
    variants: {
      // Design variants
      variant: {
        default: clsx(
          "bg-blue-500",
          "text-white",
          "hover:bg-blue-700",
          "active:bg-blue-800",
          "disabled:hover:bg-blue-500",
          "disabled:active:bg-blue-500",
          "disabled:hover:text-white",
          "disabled:active:text-white"
        ),
        outline: clsx(
          "border",
          "border-blue-500",
          "text-blue-500",
          "hover:text-white",
          "hover:bg-blue-500",
          "active:bg-blue-800",
          "active:border-blue-800",
          "disabled:hover:text-blue-500",
          "disabled:active:text-blue-500",
          "disabled:hover:bg-transparent",
          "disabled:active:bg-transparent",
          "disabled:hover:border-blue-500",
          "disabled:active:border-blue-500"
        ),
      },

      // Size variants
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },

      // Spacing utilities
      p: {
        sm: "p-1",
        md: "p-2",
        lg: "p-4",
      },
      m: {
        sm: "m-1",
        md: "m-2",
        lg: "m-4",
      },
      gap: {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-4",
      },

      // Layout utilities
      display: {
        block: "block",
        inline: "inline",
        flex: "flex",
        inlineFlex: "inline-flex",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      p: "md",
    },
  }
);

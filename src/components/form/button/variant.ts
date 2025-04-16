import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded transition-colors focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800",
        outline:
          "border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 active:bg-blue-800 active:border-blue-800",
      },

      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },

      // Tailwind utilitiesをプロップで扱う
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
    },
  }
);

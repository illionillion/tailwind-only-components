import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { buttonVariants } from "./variant";

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export function Button({
    children,
    onClick,
    disabled = false,
    className = "",
    type = "button",
    variant,
    size,
    display,
    m,
    p = "md",
    gap,
}: ButtonProps) {
    return <button
        className={buttonVariants({ variant, size, className, display, m, p, gap })}
        onClick={onClick}
        disabled={disabled}
        type={type}>
        {children}
    </button>
}
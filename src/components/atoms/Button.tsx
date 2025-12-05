import React from "react"
import { cn } from "../../utils/cn" // helper opcional (vou mandar abaixo)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const variants = {
  primary: "bg-black text-white hover:bg-gray-900",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline: "border border-black text-black hover:bg-gray-100",
  ghost: "text-black hover:bg-gray-100",
}

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...rest
}) => {
  const isDisabled = loading || disabled

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-semibold transition-all gap-2 select-none",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        fullWidth && "w-full"
      )}
      disabled={isDisabled}
      {...rest}
    >
      {loading && (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
      )}

      {!loading && leftIcon}

      {children}

      {!loading && rightIcon}
    </button>
  )
}

export default Button

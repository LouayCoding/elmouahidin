import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-poppins",
  {
    variants: {
      variant: {
        default: "bg-[#C4A484] text-white hover:bg-[#B59473] focus-visible:ring-[#C4A484]",
        primary: "bg-[#EDE1D6] text-[#2D2D2D] hover:bg-[#D4C4B0] focus-visible:ring-[#EDE1D6]",
        outline: "border border-[#C4A484] bg-transparent text-[#C4A484] hover:bg-[#C4A484] hover:text-white focus-visible:ring-[#C4A484]",
        ghost: "text-[#C4A484] hover:bg-[#EDE1D6] hover:text-[#2D2D2D] focus-visible:ring-[#EDE1D6]",
        link: "text-[#C4A484] underline-offset-4 hover:underline focus-visible:ring-[#C4A484]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

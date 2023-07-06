import React from "react"
import { cls } from "@/utils/cls"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    error?: boolean;
    placeholder?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, helperText, error, placeholder, ...props }, ref) => (
        <div>
            <input
                type={type}
                className={cls(
                    `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none ${error ? "focus-visible:ring-0" : "focus-visible:ring-2"} ring-primary-main focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? "border-red-500" : "border-inherit"}`,
                    className
                )}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
            <span className="text-red-500 text-sm">{helperText}</span>
        </div>

    )
)

Input.displayName = "Input"
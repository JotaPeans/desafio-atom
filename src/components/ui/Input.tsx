import { cn } from "@/utils/functions";
import { ForwardedRef, InputHTMLAttributes } from "react";
import { forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const Input = forwardRef(({ ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <input {...rest} ref={ref} className={cn("w-full max-w-56 min-w-20 h-11 focus:outline-none focus:ring-2 transition-all ring-principal-light-purple bg-neutral-950/40 text-white box-border rounded-lg px-4", rest.className)}/>
    );
})
 
export default Input;
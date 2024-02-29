import { cn } from "@/utils/functions";
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    
}

const Input = forwardRef(({ ...rest }: InputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <textarea {...rest} ref={ref} className={cn("w-full flex-1 focus:outline-none focus:ring-2 transition-all ring-principal-light-purple bg-neutral-950/40 text-white box-border rounded-xl px-4 py-2", rest.className)}/>
    );
})
 
export default Input;
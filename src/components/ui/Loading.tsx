import { cn } from "@/utils/functions";
import { ForwardedRef, forwardRef } from 'react';

interface LoadingProps {
    className?: string
}

const Loading = forwardRef(({ className }: LoadingProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={cn("w-4 h-4 border-4 border-stone-800 border-t-transparent rounded-full animate-spin", className)}></div>
    );
})
 
export default Loading;

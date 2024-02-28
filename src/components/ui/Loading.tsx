import { cn } from "@/utils/functions";
import { forwardRef } from 'react';

interface LoadingProps {
    className?: string
}

const Loading = forwardRef(({ className }: LoadingProps, ref) => {
    return (
        <div ref={ref as any} className={cn("w-4 h-4 border-4 border-stone-800 border-t-transparent rounded-full animate-spin", className)}></div>
    );
})
 
export default Loading;

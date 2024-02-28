import { cn } from "@/utils/functionts";

interface LoadingProps {
    className?: string
}

const Loading = ({ className }: LoadingProps) => {
    return (
        <div className={cn("w-4 h-4 border-4 border-stone-800 border-t-transparent rounded-full animate-spin", className)}></div>
    );
}
 
export default Loading;
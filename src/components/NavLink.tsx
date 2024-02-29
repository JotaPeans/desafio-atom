import { cn } from "@/utils/functions";
import { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean
}

const NavLink = ({ active = false, ...rest }: NavLinkProps) => {
    return (
        <a
            {...rest}
            data-active={active}
            className={cn("data-[active=true]:border-l-4 px-1 py-1 transition-all hover:text-purple-100 border-green-500 capitalize", rest.className)}
        >
            { rest.children }
        </a>
    );
}
 
export default NavLink;
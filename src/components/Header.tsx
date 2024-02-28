import HeaderPost from "./HeaderPost";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Search from "./Search";

const Header = () => {
    return (
        <header className="w-full px-6 lg:px-32 py-16 bg-principal-purple flex flex-col gap-16 border-b-[6px] border-b-green-500">
            <div className="relative flex w-full max-w-[1185px] mx-auto gap-10 items-center justify-center lg:justify-between bg-principal-purple">
                <Logo/>    

                <nav className="h-11 hidden lg:flex items-center ">
                    <ul className="flex gap-6 font-medium text-white items-center justify-center">
                        <li>
                            <NavLink active href="#h">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="#s">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink href="#c">Categorias</NavLink>
                        </li>
                        <li>
                            <NavLink href="#c2">Contato</NavLink>
                        </li>
                    </ul>
                </nav>

                <Search/>
            </div>

            <HeaderPost link="#" date={new Date()} image="https://qdrant.tech/blog/case-study-bloop/preview/title.jpg" title="Veja o guia definitivo para conquistar seus objetivos como DEV em 2022">
                Lorem ipsum dolor sit amet, seus consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. 
            </HeaderPost>
        </header>
    );
}
 
export default Header;
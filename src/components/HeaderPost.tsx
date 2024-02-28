import { ArrowRight } from "lucide-react";
import { green } from "tailwindcss/colors";
import { PostProps } from "./Post";


const HeaderPost = ({ children, link, date, title, image }: PostProps) => {
    return (
        <div aria-label="conteudo principal" className="w-full max-w-[1185px] mx-auto flex justify-between gap-8 lg:gap-32">
            <div className="flex flex-col gap-6 text-justify my-auto">
                <h2 className="font-semibold text-4xl text-principal-light-purple">
                    { title }
                </h2>
                <p className="font-medium text-lg text-white/80">
                    { children }
                </p>

                <a rel="stylesheet" href={link} className="group flex items-center justify-center gap-2 max-w-fit hover:text-purple-400/90 transition-all text-principal-light-purple font-semibold">
                    Veja mais <ArrowRight color={green[500]} strokeWidth={2.5} size={18} className="group-hover:translate-x-2 transition-all"/>
                </a>
            </div>

            {
                image && (
                    <div className="bg-gradient-to-r from-purple-500/50 to-purple-50/10 rounded-xl overflow-hidden hidden lg:block w-full xl:min-w-[570px] xl:max-w-min max-h-96">
                        <img src="https://qdrant.tech/blog/case-study-bloop/preview/title.jpg" className="mix-blend-lighten w-full h-full object-cover" alt={title.substring(0, 10)} />
                    </div>
                )
            }
        </div>
    );
}
 
export default HeaderPost;
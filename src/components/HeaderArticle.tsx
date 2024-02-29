import { ArrowRight } from "lucide-react";
import { green } from "tailwindcss/colors";
import { ArticleProps } from "./Article";
import TiltAny from "./TiltAny";

const HeaderArticle = ({ id, author, createdAt, imageUrl, likes, summary, title }: ArticleProps) => {
    return (
        <div aria-label="conteudo principal" className="w-full max-w-[1185px] mx-auto flex justify-between gap-8 lg:gap-32">
                <div className="flex flex-col gap-6 text-justify my-auto">
                    <a href={`/article/${id}`} className="font-semibold text-4xl text-principal-light-purple">
                        { title }
                    </a>
                    <p className="font-medium text-lg text-white/80">{ summary }</p>

                    <a href={`/article/${id}`} className="group flex items-center justify-center gap-2 max-w-fit hover:text-purple-400/90 transition-all text-principal-light-purple font-semibold">
                        Veja mais <ArrowRight color={green[500]} strokeWidth={2.5} size={18} className="group-hover:translate-x-2 transition-all"/>
                    </a>
                </div>

                <TiltAny>
                    {
                        imageUrl && (
                            <div className=" rounded-xl overflow-hidden hidden lg:block w-full xl:min-w-[570px] xl:max-w-min max-h-96">
                                <img src={imageUrl} className="w-full h-full object-cover" alt={title.substring(0, 10)} />
                            </div>
                        )
                    }
                </TiltAny>
            </div>
    );
}
 
export default HeaderArticle;
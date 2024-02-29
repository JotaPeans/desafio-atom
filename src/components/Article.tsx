import { Article as ArticleModel } from "@prisma/client";
import { cn } from "@/utils/functions";
import TiltAny from "./TiltAny";

export interface ArticleProps extends ArticleModel {
    disableImage?: boolean
    className?: string
}

const Article = ({ className, disableImage = false, author, createdAt, id, imageUrl, likes, summary, title }: ArticleProps) => {
    // faz a formatação do objeto Date
    const dateString = createdAt.toLocaleString("pt-br", { day: "2-digit", month: "long", year: "numeric" });

    return (
        <TiltAny tiltRotation={6} className={cn("snap-center flex-1 py-6 min-w-80", className)}>
            <div className="flex flex-col gap-3">
                {
                    !disableImage && imageUrl && (
                        <div className=" rounded-xl flex overflow-hidden min-h-60 max-h-[350px]">
                            <img src={imageUrl} alt={title.substring(0, 10)} className="w-full object-cover" width={374} height={250} />
                        </div>
                    )
                }

                <p className="font-semibold text-sm text-zinc-500">{ dateString }</p>

                <a href={`/article/${id}`} className="text-2xl font-semibold text-principal-purple hover:text-principal-purple/80 transition-all">{ title }</a>

                <p className="font-medium text-zinc-800 text-justify">{ summary }</p>
            </div>
        </TiltAny>
    );
}
 
export default Article;
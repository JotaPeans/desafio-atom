"use client"

import { cn } from "@/utils/functions";
import { Tilt } from "react-tilt";
import { Article as ArticleModel } from "@prisma/client";

export interface ArticleProps extends ArticleModel {
    disableImage?: boolean
    className?: string
}

const defaultTiltOptions = {
	reverse:        false,
	max:            5,     // tilt rotation (em graus º)
	perspective:    2000,
	scale:          1,
	reset:          true,    // Reseta as transformações do componente quando o mouse sair.
}

const Article = ({ className, disableImage = false, author, createdAt, id, imageUrl, likes, summary, title }: ArticleProps) => {
    // faz a formatação do objeto Date
    const dateString = createdAt.toLocaleString("pt-br", { day: "2-digit", month: "long", year: "numeric" });

    return (
        <Tilt options={defaultTiltOptions} className={cn("snap-center flex-1 py-6 min-w-80", className)}>
            <div className="flex flex-col gap-3">
                {
                    !disableImage && imageUrl && (
                        <div className=" rounded-xl flex overflow-hidden min-h-60 max-h-[350px]">
                            <img src={imageUrl} alt={title.substring(0, 10)} className="w-full object-cover" width={374} height={250} />
                        </div>
                    )
                }

                <p className="font-semibold text-sm text-zinc-500">{ dateString }</p>

                <a target="_blank" href={`/article/${id}`} className="text-2xl font-semibold text-principal-purple hover:text-principal-purple/80 transition-all">{ title }</a>

                <p className="font-medium text-zinc-800 text-justify">{ summary }</p>
            </div>
        </Tilt>
    );
}
 
export default Article;
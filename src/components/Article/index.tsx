"use client"

import { Article as ArticleModel } from "@prisma/client";
import { cn } from "@/utils/functions";
import TiltAny from "@/components/TiltAny";
import { useContext, useEffect, useRef, useState } from "react";
import { appContext } from "@/app/AppProvider";
import likeAnimation from "@/assets/likeAnimation.json";
import Lottie from "lottie-react";
import likeOrDislikeAction from "./actions/likeOrDislikeAction";

export interface ArticleProps extends ArticleModel {
    disableImage?: boolean
    className?: string
}

const Article = ({ className, disableImage = false, author, createdAt, id, imageUrl, likes, summary, title }: ArticleProps) => {

    const lottieRef = useRef<any>(null);
    
    // pega o uuid do usuário atual através da context API do react
    const { uuid } = useContext(appContext);
    
    const [ likesData, setLikesData ] = useState(likes);

    // verifica no array de curtidas a presença do uuid do usuário atual e transforma em booleano
    const isLiked = Boolean(likesData.find(v => v.match(uuid)));

    useEffect(() => {
        if(isLiked) {
            lottieRef.current?.goToAndStop(90, true);
        }
    }, []);

    // faz a formatação do objeto Date
    const dateString = createdAt.toLocaleString("pt-br", { day: "2-digit", month: "long", year: "numeric" });

    function handleLikeClick() {
        let data = [...likesData];

        if(!isLiked) {
            lottieRef.current.playSegments([0, 90], true);

            data.push(uuid);

            setLikesData(data);
            
            likeOrDislikeAction(id, "like");
        }
        else {
            lottieRef.current.playSegments([90, 0], true);

            data.splice(data.findIndex(id => id === uuid), 1);

            setLikesData(data);
            
            likeOrDislikeAction(id, "dislike");
        }
    }

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
                
                <div className="ml-auto flex items-center text-sm font-semibold text-zinc-700">
                    <button onClick={handleLikeClick} className="w-8 h-8 flex items-center justify-center overflow-hidden">
                        <Lottie
                            lottieRef={lottieRef}
                            className="scale-[1.75]"
                            animationData={likeAnimation}
                            loop={false}
                            autoplay={false}
                        />
                    </button>
                    <p className="min-w-5 text-center">{likesData.length}</p>
                </div>
            </div>
        </TiltAny>
    );
}
 
export default Article;
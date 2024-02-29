"use client"

import Lottie from "lottie-react";
import { useContext, useEffect, useRef, useState } from "react";
import likeAnimation from "@/assets/likeAnimation.json";
import { appContext } from "@/app/AppProvider";
import likeOrDislikeAction from "@/components/Article/actions/likeOrDislikeAction";

interface LikesProps {
    id: number
    likes: string[]
}   

const Likes = ({ id, likes }: LikesProps) => {
    // pega o uuid do usuário atual através da context API do react
    const { uuid } = useContext(appContext);

    const [ likesData, setLikesData ] = useState(likes);

    const lottieRef = useRef<any>(null);
    
    // verifica no array de curtidas a presença do uuid do usuário atual e transforma em booleano
    const isLiked = Boolean(likesData?.find(v => v.match(uuid)));

    useEffect(() => {
        if(isLiked) {
            // vai para o frame 90 e pausa a animação
            lottieRef.current?.goToAndStop(90, true);
        }
    }, []);

    function handleLikeClick() {
        // usando o spread operator para copiar o estado likesData
        let data = [...likesData];

        if(!isLiked) {
            // da o play na animação somente do frame 0 ao frame 90
            lottieRef.current.playSegments([0, 90], true);
            
            // adiciona ao array data o uuid do usuário
            data.push(uuid);

            // seta o novo array de uuid de usuários que curtiram o artigo
            setLikesData(data);
            
            // chama a server action para registrar no banco de dados o array de uuid de usuários que curtiram o artigo
            likeOrDislikeAction(id, "like");
        }
        else {
            // da o play na animação somente do frame 0 ao frame 90
            lottieRef.current.playSegments([90, 0], true);

            // remove, do array de uuid de usuários que curtiram o artigo encontrado pelo indice, o uuid do usuário atual
            data.splice(data.findIndex(id => id === uuid), 1);

            // seta o novo array de uuid de usuários que curtiram o artigo
            setLikesData(data);
            
            // chama a server action para registrar no banco de dados o array de uuid de usuários que curtiram o artigo
            likeOrDislikeAction(id, "dislike");
        }
    }
    
    return (
        <div className="w-full max-w-[654px] mx-auto mt-2 flex items-center justify-end">
            <button aria-label={"curtir " + id} onClick={handleLikeClick} className="w-11 h-11 flex items-center justify-center overflow-hidden">
                <Lottie
                    lottieRef={lottieRef}
                    className="scale-[1.65]"
                    animationData={likeAnimation}
                    loop={false}
                    autoplay={false}
                />
            </button>
            <p className="min-w-5 text-center font-semibold text-zinc-700 text-xl">{likesData?.length}</p>
        </div>
    );
}
 
export default Likes;
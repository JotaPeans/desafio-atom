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
    const isLiked = Boolean(likesData.find(v => v.match(uuid)));

    useEffect(() => {
        if(isLiked) {
            lottieRef.current?.goToAndStop(90, true);
        }
    }, []);

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
        <div className="w-full max-w-[654px] mx-auto mt-2 flex items-center justify-end">
            <button onClick={handleLikeClick} className="w-11 h-11 flex items-center justify-center overflow-hidden">
                <Lottie
                    lottieRef={lottieRef}
                    className="scale-[1.75]"
                    animationData={likeAnimation}
                    loop={false}
                    autoplay={false}
                />
            </button>
            <p className="min-w-5 text-center text-lg">{likesData.length}</p>
        </div>
    );
}
 
export default Likes;
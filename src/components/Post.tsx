"use client"

import { cn } from "@/utils/functionts";
import { ReactNode } from "react";
import { Tilt } from 'react-tilt'

export interface PostProps {
    className?: string
    link: string
    image?: string
    date: string | Date
    title: string
    children: ReactNode
}

const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.71,.07,.6,.68)",    // Easing on enter/exit.
}

const Post = ({ className, date, children, link, image, title }: PostProps) => {
    const dateString = date instanceof Date ? date.toLocaleString("pt-br", { day: "2-digit", month: "long", year: "numeric" }) : date;

    return (
        <Tilt options={defaultTiltOptions} className={cn("flex-1 py-6", className)}>
            <div className="flex flex-col gap-3">
                {
                    image && (
                        <div className="bg-gradient-to-r from-purple-500/50 to-purple-50/10 rounded-xl overflow-hidden">
                            <img src={image} alt={title.substring(0, 10)} className="mix-blend-lighten" />
                        </div>
                    )
                }

                <p className="font-semibold text-sm text-zinc-500">{ dateString }</p>

                <h3 className="text-2xl font-semibold text-principal-purple">{ title }</h3>

                <p className="font-medium text-zinc-800 text-justify">
                    { children }
                </p>
            </div>
        </Tilt>
    );
}
 
export default Post;
"use client"

import { ReactNode, cloneElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InViewProps {
    children: ReactNode
    callback?: () => (Promise<void> | void)
}

const InView = ({ callback, children }: InViewProps) => {
    const { ref: inViewRef, inView } = useInView();

    // Passar a ref para o elemento filho
    const childrenWithRef = cloneElement(children as React.ReactElement<any>, {
        ref: inViewRef,
    });

    useEffect(() => {
        callback && callback();
    }, [inView]);

    return (
        <>
            { childrenWithRef }
        </>
    );
}
 
export default InView;
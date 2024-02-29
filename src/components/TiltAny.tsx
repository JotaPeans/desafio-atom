"use client"

import { ReactNode } from "react";
import { Tilt } from "react-tilt";


interface TiltAnyProps {
    children: ReactNode
    className?: string
    tiltRotation?: number
}

const TiltAny = ({ children, tiltRotation, className }: TiltAnyProps) => {
    const defaultTiltOptions = {
        reverse:        false,
        max:            tiltRotation ?? 15,     // tilt rotation (em graus º)
        perspective:    2000,
        scale:          1,
        reset:          true,    // Reseta as transformações do componente quando o mouse sair.
    }

    return (
        <Tilt options={defaultTiltOptions} className={className}>
            { children }
        </Tilt>
    );
}
 
export default TiltAny;
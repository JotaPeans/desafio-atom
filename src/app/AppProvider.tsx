"use client"

import { ReactNode, createContext, useEffect } from "react";
import createCookie from "@/utils/createCookie";

interface AppProviderProps {
    uuid: string
    children: ReactNode
}

interface AppContextProps {
    uuid: string
}

export const appContext = createContext<AppContextProps>({
    uuid: ""
});

const AppProvider = ({ uuid, children }: AppProviderProps) => {

    useEffect(() => {
        // caso o uuid não exista nos cookies, a função createCookie criará um cookie chamado "uuid" com o id do usuário atual
        createCookie("uuid", uuid);
    }, []);

    // disponibiliza atravez da context API do react o uuid para todos os componentes client side
    return (
        <appContext.Provider value={{
            uuid
        }}>
            { children }
        </appContext.Provider>
    );
}
 
export default AppProvider;
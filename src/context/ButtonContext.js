import { createContext, useState, } from "react";

export const ButtonContext = createContext()

export const ButtonContextProvider = ({children}) => {
    const [backbutton, setBackbutton] = useState(false)
    const toggleButton = () => {
        setBackbutton(!backbutton); // Inverte o valor
        console.log(!backbutton); // Exibe o valor atualizado
    }
    return(
        <ButtonContext.Provider value={{backbutton, toggleButton}}>
            {children}
        </ButtonContext.Provider>
    )
}
import { createContext, useState, } from "react";

export const ButtonContext = createContext()

export const ButtonContextProvider = ({children}) => {
    const [backbutton, setBackbutton] = useState(false)
    const toggleButton = () => {
        setBackbutton(!backbutton); 
    }
    return(
        <ButtonContext.Provider value={{backbutton, toggleButton}}>
            {children}
        </ButtonContext.Provider>
    )
}
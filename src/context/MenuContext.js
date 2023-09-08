    import { createContext, useState } from "react";

    export const MenuContext = createContext()

    export const MenuContextProvider = ({children}) => {

        const [menuisVisible, setMenuisVisible] = useState(false);
        const toggleMenu = () => {
           setMenuisVisible(menuisVisible === (true)? (false) : (true))
        }


        return(
            <MenuContext.Provider value={{menuisVisible, toggleMenu}}>
                {children}
            </MenuContext.Provider>
        )
    }
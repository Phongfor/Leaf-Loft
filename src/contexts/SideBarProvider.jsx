import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false);
    const [type,setType] = useState('')
    const values = {
        openCart,
        setOpenCart,
        type,
        setType
    };

    return (
        <SideBarContext.Provider value={values}>
            {children}
        </SideBarContext.Provider>
    );
};

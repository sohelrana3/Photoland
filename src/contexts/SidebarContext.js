import React, { useState, createContext, } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [Isopen, setIsopen] = useState(false);
    const handleClose = () => {
        setIsopen(false);
    };
    return <SidebarContext.Provider value={{Isopen}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider
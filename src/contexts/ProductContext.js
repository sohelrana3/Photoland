import React, { useEffect, createContext, useState } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // Product state
    const [Product, setProduct] = useState([]);
    // axio Product
    useEffect(()=>{
        const FetchProduct = async ()=>{
            const respons = await fetch('https://fakestoreapi.com/products')
            const data = await respons.json()
            setProduct(data)
            
        }
        FetchProduct()
    }, [])
    return <ProductContext.Provider value={{Product}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

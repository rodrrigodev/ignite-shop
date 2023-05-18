import { createContext, useState, ReactNode } from "react"

interface CartContextType {
    products: string[],
    handlerAddProduct: (id: string)=> void
}

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({ children }:CartContextProviderProps){
    const [ products, setProducts] = useState<string[]>([])

    function handlerAddProduct(idToAdd: string){
        const idExistInCart = products.find((id)=>{
            return id === idToAdd
        })

        setProducts((state) => [...state, idToAdd])
    }

    return(
        <CartContext.Provider value={{products, handlerAddProduct}}>
            {children}
        </CartContext.Provider>
    )
}
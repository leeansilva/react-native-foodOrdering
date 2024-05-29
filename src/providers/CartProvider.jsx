import { createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

export const CartContext = createContext({});

const CartProvider = ({children}) =>{
    const [items, setItems] = useState([]);

    const addItem = (product, size)=>{
        const existingItem = items.find(
            (item) => item.product === product && item.size === size
        );

        if (existingItem){
            updateQuantity(existingItem.id, 1);
            return;
        }

        const newCardItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size: size,
            quantity: 1
        }

        setItems([newCardItem, ...items])
    }

    const updateQuantity =(itemId, amount) =>{
        setItems(items.map(item =>
            item.id !== itemId 
            ? item 
            : {...item, quantity : item.quantity + amount})
            .filter((item) => item.quantity > 0)
        );
    }

    const total = items.reduce((sum, item) => (sum += item.product.price * item.quantity),0);

    return (
        <CartContext.Provider 
        value={{ items, addItem, updateQuantity, total}}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext)
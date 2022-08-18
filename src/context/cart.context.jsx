import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const decreaseCountItems = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const removeItemFromCart = (cartItems, itemToRemove) => cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    decreaseCount: () => { },
    removeFromCart: () => { },
    totalPrice: 0
});

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        setTotalPrice(newCartTotal);

    }, [cartItems]);

    const addItemToCart = productToAdd => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const decreaseCount = productToRemove => {
        setCartItems(decreaseCountItems(cartItems, productToRemove));
    }

    const removeFromCart = itemToRemove => {
        setCartItems(removeItemFromCart(cartItems, itemToRemove));
    }

    const value = {
        isCartOpen, setIsCartOpen, addItemToCart,
        cartItems, cartCount, decreaseCount,
        removeFromCart, totalPrice
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
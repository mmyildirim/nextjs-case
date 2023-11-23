"use client";
import { IBasketItem } from "@/models/basket";
import { IProductItem } from "@/models/product";
import { createContext, useReducer, useContext, ReactNode } from "react";

type CartState = {
  items: IBasketItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: IProductItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_FROM_CART"; payload: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        const newState = state.items.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        localStorage.setItem("cart", JSON.stringify(newState));
        return {
          ...state,
          items: newState,
        };
      } else {
        const newState = [...state.items, { ...action.payload, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(newState));
        return {
          ...state,
          items: newState,
        };
      }

    case "REMOVE_ITEM":
      const newRemoveItems = state.items.map((item) =>
        item.id === action.payload && item.quantity >= 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      const filteredRemoveItems = newRemoveItems.filter(
        (item) => item.quantity !== 0
      );
      localStorage.setItem("cart", JSON.stringify(filteredRemoveItems));
      return {
        ...state,
        items: filteredRemoveItems,
      };

    case "CLEAR_FROM_CART":
      const clearItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(clearItems));
      return {
        ...state,
        items: clearItems,
      };
    default:
      return state;
  }
};

const initialCartState: CartState = {
  items: JSON.parse(
    (typeof window !== "undefined" && window.localStorage.getItem("cart")) ||
      "[]"
  ),
};
const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { CartItem, Product } from "../types/product"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeOneFromCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  })

  /**  Salva no localStorage sempre que mudar */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  /**  Adicionar item (se existe, aumenta quantidade) */
  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  /**  Remove uma unidade do item */
  const removeOneFromCart = useCallback((id: string) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id)
      if (!item) return prev

      if (item.quantity > 1) {
        return prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
      }

      return prev.filter((i) => i.id !== id)
    })
  }, [])

  /** 🗑 Remove completamente o item */
  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  /** 🧼 Limpar carrinho */
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  /**  Totais */
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}

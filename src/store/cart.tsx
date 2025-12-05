import React from 'react'
import create from 'zustand'

type CartItem = { id: string; name: string; price: number; qty: number }

type CartState = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (id: string) => void
  clear: () => void
}

const useCart = create<CartState>((set) => ({
  items: [],
  add: (item) => set((s) => {
    const exists = s.items.find(i => i.id === item.id)
    if (exists) return { items: s.items.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i) }
    return { items: [...s.items, item] }
  }),
  remove: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
  clear: () => set({ items: [] })
}))

export const CartProvider: React.FC<{children?: React.ReactNode}> = ({ children }) => {
  return <>{children}</>
}

export default useCart

import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id)
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }
    }
    return { items: [...state.items, product] }
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  clearCart: () => set({ items: [] })
}))

export { useCartStore }

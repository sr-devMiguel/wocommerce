import { useState, useEffect } from 'react'
import type { Product } from '../types/product'

import MoletomAzul from '../assets/products/moletom-azul.png'
import MoletomVerde from '../assets/products/moletom-verde.png'
import CamisetaEstampa from '../assets/products/camiseta-estampa.png'

const initialProducts: Product[] = [
  { id: '1', name: 'Moletom Azul Premium', price: 149.9, image: MoletomAzul, category: 'Moletom' },
  { id: '2', name: 'Moletom Verde Vision', price: 159.9, image: MoletomVerde, category: 'Moletom' },
  { id: '3', name: 'Camiseta Estampa Street', price: 79.9, image: CamisetaEstampa, category: 'Camiseta' }
]

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProducts(initialProducts)
      setLoading(false)
    }, 1000)
  }, [])

  return { products, loading }
}

export default useProducts

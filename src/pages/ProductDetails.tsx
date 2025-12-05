import { useParams } from "react-router-dom"
import { useCart } from "../components/context/CartContext"
import useProducts from "../hooks/useProducts"

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()
  const { products } = useProducts()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <p className="text-center mt-10">Produto não encontrado.</p>
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 py-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg shadow-lg"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold mt-4">R$ {product.price}</p>

        <button
          className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}

export default ProductDetails

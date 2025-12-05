import { Link } from "react-router-dom"
import { useCart } from "../components/context/CartContext"
import { Trash2 } from "lucide-react"

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-10 px-3 md:px-4">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 md:py-20 bg-gray-50 rounded-xl">
          <p className="text-gray-600 mb-4">Seu carrinho está vazio</p>
          <Link
            to="/products"
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Ver Produtos
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border rounded-xl p-4 gap-3 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                />
                <div>
                  <span className="font-semibold text-sm md:text-base block">{item.name}</span>
                  <span className="text-gray-600 text-sm">Qtd: {item.quantity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <strong className="text-base md:text-lg">R$ {(item.price * item.quantity).toFixed(2)}</strong>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition p-2"
                  aria-label="Remover item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 md:pt-6 mt-6">
            <p className="text-lg md:text-xl font-semibold text-right">
              Total: R$ {total.toFixed(2)}
            </p>

            <Link
              to="/checkout"
              className="mt-4 block w-full sm:w-auto sm:float-right bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold text-center"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
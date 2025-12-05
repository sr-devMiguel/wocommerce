import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart, User } from "lucide-react"

const Header = () => {
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-sm py-3 md:py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-3 md:px-4">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          Catálogo
        </Link>

        {/* MENU */}
        <ul className="flex items-center space-x-3 md:space-x-6 text-gray-800 font-medium text-sm md:text-base">
          <Link 
            to="/products" 
            className="hover:text-black transition hidden sm:block"
          >
            Produtos
          </Link>

          {/* CARRINHO COM BADGE */}
          <Link 
            to="/cart" 
            className="relative flex items-center hover:text-black transition"
          >
            <ShoppingCart size={20} className="md:w-6 md:h-6" />

            {totalItems > 0 && (
              <span 
                className="absolute -top-2 -right-3 bg-black text-white text-xs
                font-semibold w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
              >
                {totalItems}
              </span>
            )}
          </Link>

                    {/* BOTÃO CRIAR CONTA */}
          <Link 
            to="/register"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold text-sm md:text-base"
          >
            <User size={18} className="md:w-5 md:h-5" />
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
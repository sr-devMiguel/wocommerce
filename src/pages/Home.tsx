import React from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/molecules/ProductCard"
import Text from "../components/atoms/Text"
import MoletomAzul from '../assets/products/moletom-azul.png'
import MoletomVerde from '../assets/products/moletom-verde.png'
import CamisetaEstampa from '../assets/products/camiseta-estampa.png'

const featured = [
  { id: '1', name: "Moletom Azul Premium", price: 149.9, image: MoletomAzul, category: "Moletom" },
  { id: '2', name: "Moletom Verde Vision", price: 159.9, image: MoletomVerde, category: "Moletom" },
  { id: '3', name: "Camiseta Estampa Street", price: 79.9, image: CamisetaEstampa, category: "Camiseta" }
]

const Home: React.FC = () => {
  return (
    <div className="space-y-12">

      {/* Seção Hero / Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 md:py-20 rounded-xl shadow-xl text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          High Vision Store
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2 opacity-90">
          Moda Premium | Estilo | Qualidade | Exclusividade
        </p>
        <Link
          to="/products"
          className="mt-4 md:mt-6 inline-block bg-white text-gray-900 px-5 py-2 md:px-6 rounded-full shadow-lg hover:bg-gray-200 transition font-semibold text-sm md:text-base"
        >
          Ver Produtos
        </Link>
      </section>

      {/* Produtos em destaque */}
      <section className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-8 md:py-10 bg-gray-100 rounded-lg shadow px-4">
        <Text as="h3" className="text-lg md:text-xl font-bold">Quer ver mais?</Text>
        <Link
          to="/products"
          className="mt-3 md:mt-4 inline-block bg-gray-900 text-white px-5 md:px-6 py-2 rounded-full hover:bg-gray-800 transition font-semibold text-sm md:text-base"
        >
          Explorar Catálogo Completo
        </Link>
      </section>
    </div>
  )
}

export default Home
const Checkout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <p className="text-gray-600">
        Aqui futuramente terá integração com pagamento (Vega Checkout), endereço, etc.
      </p>

      <form className="space-y-4 mt-8">
        <input className="w-full border p-3 rounded" placeholder="Nome completo" />
        <input className="w-full border p-3 rounded" placeholder="Endereço" />
        <input className="w-full border p-3 rounded" placeholder="Telefone" />
        <input className="w-full border p-3 rounded" placeholder="Complemento" />
        <input className ="w-full border p-3 rounded" placeholder="CEP" />
        <input className ="w-full border p-3 rounded" placeholder="Cidade" />
        <input className ="w-full border p-3 rounded" placeholder="Estado" />
        <input className ="w-full border p-3 rounded" placeholder="Numero da casa ou ap" />
        

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg">
          Finalizar Pedido
        </button>
      </form>
    </div>
  )
}

export default Checkout

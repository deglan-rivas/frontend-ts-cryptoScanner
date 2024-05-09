import CryptoDisplay from "./components/CryptoDisplay"
import CryptoForm from "./components/CryptoForm"

function App() {
  return (
    <main className="min-h-screen bg-[url(/bg.jpg)] bg-cover bg-center">
      <div className="max-w-xl mx-auto py-6">
        <h1 className="text-white text-center text-4xl font-semibold py-6">
          Cotizador de {""}
          <span className="text-emerald-500">
            Criptomonedas
          </span>
        </h1>
        <div className="w-full bg-white rounded-md px-5 py-16 space-y-12">
          <CryptoForm />
          <CryptoDisplay />
        </div>
      </div>
    </main>
  )
}

export default App

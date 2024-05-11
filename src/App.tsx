import { useState } from "react"
import CryptoDisplay from "./components/CryptoDisplay"
import CryptoForm from "./components/CryptoForm"
import Spinner from "./components/Spinner"
import { CryptoConversionSchema } from "./schemas"
import { CryptoConversion, Search } from "./types"

function App() {
  const initialConversion: CryptoConversion = {
    IMAGEURL: "",
    PRICE: "",
    HIGHDAY: "",
    LOWDAY: "",
    CHANGEPCT24HOUR: "",
    LASTUPDATE: ""
  }
  const [cryptoConversion, setCryptoConversion] = useState<CryptoConversion>(initialConversion)
  const [loading, setLoading] = useState(false)

  const getCryptoConversion = async (search: Search): Promise<void> => {
    try {
      setCryptoConversion(initialConversion)
      setLoading(true)
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${search.cryptoCoin}&tsyms=${search.commonCoin}`
      const result = await fetch(url)
      const { DISPLAY } = await result.json()
      console.log(DISPLAY)
      const hasCryptoConversion = CryptoConversionSchema.safeParse(DISPLAY[search.cryptoCoin][search.commonCoin])
      console.log(hasCryptoConversion)
      if (!hasCryptoConversion.success) {
        setCryptoConversion(initialConversion)
        throw new Error(hasCryptoConversion.error.message)
      }
      setCryptoConversion(hasCryptoConversion.data)
    } catch (error) {
      console.log(error)
      setCryptoConversion(initialConversion)
    } finally {
      setLoading(false)
    }

  }

  return (
    <main className="min-h-screen bg-[url(/bg.jpg)] bg-cover bg-center">
      <div className="max-w-xl mx-auto py-6">
        <h1 className="text-white text-center text-4xl font-semibold py-6">
          Cotizador de {""}
          <span className="text-emerald-500">
            Criptomonedas
          </span>
        </h1>
        <div className="w-full bg-white rounded-md px-5 py-12 space-y-12">
          <CryptoForm
            getCryptoConversion={getCryptoConversion}
          />
          {
            loading && (
              <Spinner />
            )
          }
          {
            cryptoConversion.IMAGEURL && (
              <CryptoDisplay
                cryptoConversion={cryptoConversion}
              />
            )
          }
        </div>
      </div>
    </main>
  )
}

export default App

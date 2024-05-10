import { useEffect, useState } from "react";
import { commonCurrencies } from "../data";
import { CryptoCurrenciesSchema } from "../schemas";
import { CryptoCurrencies } from "../types";




export default function CryptoForm() {
  const [topCryptoCurrencies, setTopCryptoCurrencies] = useState<CryptoCurrencies>([])

  useEffect(() => {
    async function getTopCryptoCurrencies(): Promise<void> {
      try {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const result = await fetch(url)
        const { Data } = await result.json()
        const hasCryptoCurrency = CryptoCurrenciesSchema.safeParse(Data)
        // const hasCryptoCurrency = CryptoCurrenciesSchema.safeParse({ Data })
        // console.log(hasCryptoCurrency)

        if (!hasCryptoCurrency.success) {
          console.log(hasCryptoCurrency.error)
          setTopCryptoCurrencies([])
          return
        }

        setTopCryptoCurrencies(hasCryptoCurrency.data)
      } catch (error) {
        console.log(error)
        setTopCryptoCurrencies([])
      }
    }

    getTopCryptoCurrencies()
  }, [])

  return (
    <form className="space-y-5">
      <div className="space-y-3">
        <label htmlFor="commoncoin"
          className="block text-lg"
        >
          Moneda:
        </label>
        <select name="commoncoin" id="commoncoin"
          className="w-full px-2 py-2 rounded-md text-lg"
        >
          <option value="" disabled>--Seleccione--</option>
          {
            commonCurrencies.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))
          }
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="cryptocoin"
          className="block text-lg"
        >
          Criptomoneda:
        </label>
        <select name="cryptocoin" id="cryptocoin"
          className="w-full px-2 py-2 rounded-md text-lg"
        >
          <option value="" disabled>--Seleccione--</option>
          {
            topCryptoCurrencies.map((cryptoCurrency) => (
              <option key={cryptoCurrency.CoinInfo.Name} value={cryptoCurrency.CoinInfo.Name}>{cryptoCurrency.CoinInfo.FullName}</option>
            ))
          }
        </select>
      </div>

      <input type="submit" value="Cotizar"
        className="w-full bg-emerald-500 hover:bg-emerald-600 uppercase text-sm font-semibold py-2 cursor-pointer rounded-md text-white"
      />
    </form >
  )
}
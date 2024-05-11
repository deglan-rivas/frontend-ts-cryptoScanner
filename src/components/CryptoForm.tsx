import { ChangeEvent, useEffect, useState } from "react";
import { commonCurrencies } from "../data";
import { CryptoCurrenciesSchema } from "../schemas";
import { CryptoCurrencies, Search } from "../types";
import ErrorMessage from "./ErrorMessage";

interface CryptoFormProperties {
  getCryptoConversion: (search: Search) => void
}

export default function CryptoForm({ getCryptoConversion }: CryptoFormProperties) {
  const initialSearch: Search = {
    commonCoin: "",
    cryptoCoin: ""
  }

  const [topCryptoCurrencies, setTopCryptoCurrencies] = useState<CryptoCurrencies>([])
  const [search, setSearch] = useState<Search>(initialSearch)
  const [errors, setErrors] = useState("")

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



  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log("enviando ...", search)
    if (Object.values(search).includes("")) {
      setErrors("Todos los campos son obligatorios")
      return
    }
    setErrors("")
    getCryptoConversion(search)
  }

  return (
    <form className="space-y-5"
      onSubmit={handleSubmit}
    >
      {
        errors &&
        <ErrorMessage>
          {errors}
        </ErrorMessage>
      }
      <div className="space-y-3">
        <label htmlFor="commonCoin"
          className="block text-lg"
        >
          Moneda:
        </label>
        <select name="commonCoin" id="commonCoin"
          className="w-full px-2 py-2 rounded-md text-lg"
          onChange={handleChange}
          value={search.commonCoin}
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
        <label htmlFor="cryptoCoin"
          className="block text-lg"
        >
          Criptomoneda:
        </label>
        <select name="cryptoCoin" id="cryptoCoin"
          className="w-full px-2 py-2 rounded-md text-lg"
          onChange={handleChange}
          value={search.cryptoCoin}
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
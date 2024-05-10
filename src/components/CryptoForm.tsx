export default function CryptoForm() {
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
          <option value="DOL">Dolar USA</option>
          <option value="PES">Peso Mexicano</option>
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
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
        </select>
      </div>

      <input type="submit" value="Cotizar"
        className="w-full bg-emerald-500 hover:bg-emerald-600 uppercase text-sm font-semibold py-2 cursor-pointer rounded-md text-white"
      />
    </form >
  )
}
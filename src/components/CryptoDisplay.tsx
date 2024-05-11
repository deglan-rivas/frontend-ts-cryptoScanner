import { CryptoConversion } from '../types/index';
interface CryptoDisplayProperties {
  cryptoConversion: CryptoConversion
}

export default function CryptoDisplay({ cryptoConversion }: CryptoDisplayProperties) {
  return (
    <div className="space-y-6">
      <h2 className="text-center font-semibold text-3xl">
        Cotización
      </h2>
      <div className="flex justify-center items-center gap-4">
        <div className="basis-36">
          <img src={`https://cryptocompare.com/${cryptoConversion.IMAGEURL}`} alt="cryptocoin" className="" />
        </div>
        <div className="basis-auto space-y-3">
          <p className="">
            Precio actual: {""}
            <span className="font-semibold">
              {cryptoConversion.PRICE}
            </span>
          </p>

          <p className="">
            Precio más alto del día: {""}
            <span className="font-semibold">
              {cryptoConversion.HIGHDAY}
            </span>
          </p>

          <p className="">
            Precio más bajo del día: {""}
            <span className="font-semibold">
              {cryptoConversion.LOWDAY}
            </span>
          </p>

          <p className="">
            Variación últimas 24 horas: {""}
            <span className="font-semibold">
              {cryptoConversion.CHANGEPCT24HOUR}%
            </span>
          </p>

          <p className="">
            Última actualización: {""}
            <span className="font-semibold">
              {cryptoConversion.LASTUPDATE}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
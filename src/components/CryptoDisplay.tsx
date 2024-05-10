export default function CryptoDisplay() {
  return (
    <div className="space-y-6">
      <h2 className="text-center font-semibold text-3xl">
        Cotización
      </h2>
      <div className="flex justify-start items-center gap-4">
        <div className="basis-36">
          <img src="/bg.jpg" alt="cryptocoin" className="" />
        </div>
        <div className="basis-auto space-y-3">
          <p className="">
            Precio actual: {""}
            <span className="font-semibold">
              $62,919.8
            </span>
          </p>

          <p className="">
            Precio más alto del día: {""}
            <span className="font-semibold">
              $63,093.4
            </span>
          </p>

          <p className="">
            Precio más bajo del día: {""}
            <span className="font-semibold">
              $62,666.9
            </span>
          </p>

          <p className="">
            Variación últimas 24 horas {""}
            <span className="font-semibold">
              2.33%
            </span>
          </p>

          <p className="">
            Última actualización: {""}
            <span className="font-semibold">
              Just now
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default function CryptoDisplay() {
  return (
    <div className="space-y-6">
      <h2 className="text-center font-semibold text-3xl">
        Cotización
      </h2>
      <div className="flex justify-center items-center gap-4">
        <div className="basis-auto">
          <img src="/bg.jpg" alt="cryptocoin" className="" />
        </div>
        <div className="basis-auto">
          <p className="">
            El precio es de {""}
            <span className="font-semibold">
              $62,919.8
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
import { ReactNode } from "react";

interface ErrorMessageProperties {
  children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProperties) {
  return (
    <p className="text-center text-xl">
      {children}
    </p>
  )
}
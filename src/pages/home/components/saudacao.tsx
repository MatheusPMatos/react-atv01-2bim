import type { JSX } from "react"

export default function Saudacao(): JSX.Element {
  const nome = 'Ana'
  const anoNascimento = 2005

  return (
    <div>
      <p>Olá, meu nome é {nome} e nasci em {anoNascimento}.</p>
    </div>
  )
}
// src/components/meio.tsx

import type { JSX } from 'react'
import type { Estado } from '../../../service/ibge'

interface MeioProps {
  estados: Estado[]
}

export default function Meio({ estados }: MeioProps): JSX.Element {
  return (
    <div>
      <h2>Meio da página</h2>
      <h3>Lista de Estados</h3>
      <p>Lista carregada a partir da api publica do IBGE.</p>
      <ul>
        {estados.map((estado) => (
          <li key={estado.id}>
            {estado.nome} ({estado.sigla}) - Região: {estado.regiao.nome}
          </li>
        ))}
      </ul>
    </div>
  )
}

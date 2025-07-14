import Topo from './components/topo'
import Meio from './components/meio'
import Base from './components/base'

import { listarEstados } from '../../service/ibge'
import type { Estado } from '../../service/ibge'
import { useEffect, useState, type JSX, type SetStateAction } from 'react'

export default function Home(): JSX.Element {
  const [estados, setEstados] = useState<Estado[]>([])
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    listarEstados()
      .then(setEstados)
      .catch((err: { message: SetStateAction<string | null> }) => setErro(err.message))
  }, [])

  return (
    <div>
      <Topo />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <Meio estados={estados} />
      <Base />
    </div>
  )
}
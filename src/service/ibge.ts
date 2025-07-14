// src/services/ibgeService.ts

export interface Estado {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

export async function listarEstados(): Promise<Estado[]> {
    console.log('Funcao chamada com sucesso...')

  const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

  if (!resposta.ok) {
    throw new Error('Erro ao buscar estados')
  }

  const dados: Estado[] = await resposta.json()
  return dados.sort((a, b) => a.nome.localeCompare(b.nome)) // ordena por nome
}

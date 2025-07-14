# 🌎 Projeto React - Atividade 1 - Segundo Bimestre

Aplicação React com TypeScript

---

## Executar:
  - Execute os comandos em sequencia:
    - make build
    - make run

## Requisitos:
 - npm install @mui/material @emotion/react @emotion/styled react-router-dom


## 📌 Lista dos requisitos

Os requisitos de pagina e componetes estao distribuidos entre as paginas Inicio e Home.

- 1 até 5 na pagina inicio.
- 6 até 8 na pagina home.

---

## 🗂️ Estrutura
  src/
  ├── App.tsx # Rotas da aplicação
  ├── main.tsx # Renderização do App
  ├── pages/
  │ ├── inicio/inicio.tsx # Página inicial
  │ └── home/home.tsx # Página Home
  ├── components/
  │ ├── topo.tsx # Cabeçalho
  │ ├── meio.tsx # Lista de estados
  │ └── base.tsx # Rodapé
  ├── services/
  │ └── ibgeService.ts # Serviço para chamada à API do IBGE
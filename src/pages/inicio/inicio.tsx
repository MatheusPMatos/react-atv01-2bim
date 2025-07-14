import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Saudacao from '../home/components/saudacao'

export default function Inicio() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao App</h1>
      <Button variant="contained" onClick={() => navigate('/home')}>
        Ir para página Home
      </Button>
      <Saudacao />
      <Button
        variant="outlined"
        color="primary"
        style={{ marginRight: '1rem' }}
        onClick={() => alert('Você clicou no botão!')}
      >
        Mostrar Alerta
      </Button>
    </div>
  )
}


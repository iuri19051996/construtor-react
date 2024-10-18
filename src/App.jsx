import { Outlet } from 'react-router-dom';
import { Header } from './componentes/header/header.jsx'; // Ajuste o caminho conforme necessário

export function App() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Aqui o conteúdo das rotas será renderizado */}
    </div>
  );
}
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { Memoria } from './pages/memoria/memoria.jsx';
import { Quiz } from './pages/quiz/quiz.jsx';
import { Todosrecursos } from './pages/listatodosrecursos/listatodosrecursos.jsx';
import { Meusrecursos } from './pages/listameusrecursos/listameusrecursos.jsx';
import { App } from './App.jsx'; // Ajuste o caminho conforme necessário

// Defina as rotas
const routes = [
  {
    path: '/',
    element: <App />, // Use o Layout como o elemento principal
    children: [
      {
        path: '', // Esta rota renderiza o componente Home
        element: <Home />,
      },
      {
        path: 'memoria',
        element: <Memoria />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'todosrecursos',
        element: <Todosrecursos />,
      },
      {
        path: 'meusrecursos',
        element: <Meusrecursos />,
      },
  
      // Adicione mais rotas conforme necessário
    ],
  },
];

// Crie o router
const router = createBrowserRouter(routes);
export default router;
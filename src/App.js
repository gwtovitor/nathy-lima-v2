import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './View/HomePage/HomePage'
import Admin from './View/Admin/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

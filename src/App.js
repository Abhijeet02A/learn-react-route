
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Product from './pages/products';


const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/products', element: <Product />}
]);


function App() {

  return (
    <RouterProvider router={router} />
    
  );
}

export default App;

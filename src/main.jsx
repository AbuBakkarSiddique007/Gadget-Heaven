import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/ProuctDetails/ProductDetails.jsx';
import ListedCart from './components/ListedCart/ListedCart.jsx';
import Deals from './components/Deals/Deals.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        // path: 'books/:bookId',
        path: '/products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/FakeData.json')
      },
      {

        path: '/deals',
        element: <Deals></Deals>
      },
      {
        path: 'listedCart',
        element: <ListedCart></ListedCart>,
        loader: () => fetch('/FakeData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

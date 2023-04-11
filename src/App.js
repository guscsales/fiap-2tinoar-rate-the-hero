import Axios from 'axios';
import { configure } from 'axios-hooks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './screens/Search';
import Details from './screens/Details';
import NotFound from './screens/NotFound';
import NormalizeStyles from './shared/NormalizeStyles';
import Header from './components/Header/Header';
import 'react-loading-skeleton/dist/skeleton.css';

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});

configure({ axios });

const router = createBrowserRouter([
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <NormalizeStyles />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import AboutUs from '@pages/publicPages/landingPage/aboutUs/AboutUs';
import PublicPage from '@pages/publicPages/PublicPage';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: paths.Index,
    element: <PublicPage />,
    children: [
      {
        path: paths.Index,
        element: <App />
      },
      {
        path: paths.About,
        element: <AboutUs />
      }
    ]
  }
]);

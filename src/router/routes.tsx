import BasicLayout from '../BasicLayout';
import { RouteObject } from 'react-router-dom';
import TourDemo from '../pages/TourDemo/TourDemo';
import FloatButtonDemo from '../pages/FloatButtonDemo/FloatButtonDemo';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout/>,
  },
  {
    path: '/tour',
    element: <TourDemo/>
  },
  {
    path: '/float-button',
    element: <FloatButtonDemo/>
  }
];

export default routes;

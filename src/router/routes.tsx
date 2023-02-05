import BasicLayout from '../BasicLayout';
import {RouteObject} from 'react-router-dom';
import {lazy} from 'react';

const TourDemo = lazy(() => import('../pages/TourDemo/TourDemo'));
const FloatButtonDemo = lazy(() => import('../pages/FloatButtonDemo/FloatButtonDemo'));
const Modal = lazy(() => import('../pages/Modal/Modal'));

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
		path: '/modal',
		element: <Modal/>
	},
	{
		path: '/float-button',
		element: <FloatButtonDemo/>
	}
];

export default routes;

import BasicLayout from '../layout/BasicLayout';
import { IndexRouteObject, NonIndexRouteObject, RouteObject } from 'react-router-dom';
import { lazy, ReactNode } from 'react';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const TourDemo = lazy(() => import('../pages/TourDemo/TourDemo'));
const FloatButtonDemo = lazy(() => import('../pages/FloatButtonDemo/FloatButtonDemo'));
const Modal = lazy(() => import('../pages/Modal/Modal'));

interface MenuItemProps {
  label?: string;
  icon?: ReactNode;
}

interface AppIndexRouteObject extends IndexRouteObject, MenuItemProps {

}

interface AppNonIndexRouteObject extends NonIndexRouteObject, MenuItemProps {
  children?: AppRouteObject[];
}

type AppRouteObject = AppIndexRouteObject | AppNonIndexRouteObject
const appRoutes: AppRouteObject[] = [
  {
    path: '/',
    element: <BasicLayout/>,
    children: [
      {
        index: true,
        path: '/tour',
        element: <TourDemo/>,
        label: 'tour',
      },
      {
        path: '/modal',
        element: <Modal/>,
        label: 'modal'
      },
      {
        path: '/float-button',
        element: <FloatButtonDemo/>,
        label: 'float button'
      }
    ]
  }
];

const generateRoutes = (nodes: AppRouteObject[]) => {
  return nodes.map<RouteObject>(node => {
    const { label, icon, ...rest } = node;
    const routesCopy: RouteObject = { ...rest };
    if (rest.children) {
      routesCopy.children = generateRoutes(rest.children);
    }
    return routesCopy;
  });
};
const generateMenuItems = () => {
  const layoutPath = '/';
  const childrenRoute = appRoutes.find(route => route.path === layoutPath);
  if (!childrenRoute?.children) {
    throw new Error('Please set layout path');
  }
  return childrenRoute.children.map(child => {
    return {
      key: child.path,
      icon: child.icon,
      label: child.label
    };
  }) as ItemType[];
};

export const routes = generateRoutes(appRoutes);
export const menuItems = generateMenuItems();

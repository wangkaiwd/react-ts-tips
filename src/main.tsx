import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './assets/styles/index.less';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
);

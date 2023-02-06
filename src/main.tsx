import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './assets/styles/index.less';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Spin } from 'antd';
import PageFallback from './components/PageFallback/PageFallback';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
);

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import {RouterProvider} from 'react-router-dom';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense>
			<RouterProvider router={router}/>
		</Suspense>
	</React.StrictMode>,
);

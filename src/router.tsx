/* eslint-disable react/react-in-jsx-scope */
import {createBrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';

const routers = [
	{
		path: '/',
		element: <Landing />,
	},
];

export const router = createBrowserRouter(routers);

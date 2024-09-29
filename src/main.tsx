/* eslint-disable react/react-in-jsx-scope */
import {createRoot} from 'react-dom/client';
import * as Layout from './layout/Layout.tsx';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<Layout.Layout>
		<App />
	</Layout.Layout>,
);

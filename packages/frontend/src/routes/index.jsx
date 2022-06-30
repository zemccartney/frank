import { lazy as Lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import BaseLayout from '../components/Layout.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import * as NotFoundHelpers from './helpers/not-found.jsx';
import HomePage from './home/components/HomePage.jsx';

const CounterPage = Lazy(() => import('./counter/containers/CounterPage.jsx'));
const Layout = NotFoundHelpers.withNotFoundPage(BaseLayout, NotFoundPage);

export default () => {

    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: 'counter',
                    element: <CounterPage />
                },
                {
                    path: '*',
                    element: <NotFoundHelpers.CatchAllRoute />
                }
            ]
        }
    ]);

    return element;
};

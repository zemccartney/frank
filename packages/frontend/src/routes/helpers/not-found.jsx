import { Navigate, useLocation } from 'react-router-dom';

function CatchAllRoute() {

    const location = useLocation();

    return (
        <Navigate
            to={{
                ...location,
                state: {
                    ...location.state,
                    notFound: true
                }
            }}
            replace
        />
    );
}

function withNotFoundPage(RouteComponent, NotFoundComponent) {

    function RouteComponentWithNotFoundPage(props) {

        const location = useLocation();

        return location.state && location.state.notFound ?
            <RouteComponent {...props} children={<NotFoundComponent {...props} />} /> :
            <RouteComponent {...props} />;
    }

    return RouteComponentWithNotFoundPage;
}

export { CatchAllRoute, withNotFoundPage };

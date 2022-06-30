import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';
import Styled from 'styled-components';
import ErrorFallback from './ErrorFallback.jsx';
import Header from './Header.jsx';
import LoadingFallback from './LoadingFallback.jsx';


const internals = {};

export default function Layout() {

    const { Container, AppContainer } = internals;

    const location = useLocation();

    return (
        <AppContainer>
            <Header />
            <Container>
                <ErrorBoundary key={location.key} FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingFallback />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </AppContainer>
    );
}

internals.Container = Styled.div`
    display: flex;
    padding-top:10px;
    // Alternatively,the Toolbar component in <Header /> could be given
    // a disableGutters prop, and the left/right padding could be applied
    // to the entire AppContainer.
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
    flex: 1;
    @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
        padding-left: ${(props) => props.theme.spacing(3)}px;
        padding-right: ${(props) => props.theme.spacing(3)}px;
    }
`;

internals.AppContainer = Styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

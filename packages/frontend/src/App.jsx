import CssBaseline from '@mui/material/CssBaseline';
import CreateMuiTheme from '@mui/material/styles/createTheme';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import T from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import * as ReactRedux from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import * as MiddleEnd from 'strange-middle-end';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ErrorFallback from './components/ErrorFallback.jsx';
import Routes from './routes/index.jsx';

function App({ middleEnd, theme = CreateMuiTheme(), Router = HistoryRouter, ...routerProps }) {

    const { store } = middleEnd;

    return (
        <StyledThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <CssBaseline />
                    <MiddleEnd.Provider middleEnd={middleEnd}>
                        <ReactRedux.Provider store={store}>
                            <Router {...routerProps}>
                                <Routes />
                            </Router>
                        </ReactRedux.Provider>
                    </MiddleEnd.Provider>
                </ErrorBoundary>
            </MuiThemeProvider>
        </StyledThemeProvider>
    );
}

App.propTypes = {
    middleEnd: T.shape({
        store: T.object.isRequired
    }).isRequired,
    theme: T.object,
    Router: T.elementType
};

export default App;

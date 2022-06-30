import * as History from 'history';
import * as ReduxFirstHistory from 'redux-first-history';

export default (m, { basePath }) => {

    const {
        createReduxHistory,
        routerMiddleware,
        routerReducer
    } = ReduxFirstHistory.createReduxHistoryContext({
        history: History.createBrowserHistory({
            basename: basePath
        })
    });

    return {
        _createHistory: createReduxHistory,
        middleware: routerMiddleware,
        reducer: routerReducer,
        actions: {
            push: ReduxFirstHistory.push,
            replace: ReduxFirstHistory.replace,
            go: ReduxFirstHistory.go,
            goBack: ReduxFirstHistory.goBack,
            goForward: ReduxFirstHistory.goForward
        }
    };
};

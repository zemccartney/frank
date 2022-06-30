import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension/logOnlyInProduction';
import * as MiddleEnd from 'strange-middle-end';
import Counter from './counter';
import Router from './router';

function create(options = {}) {

    const middleEnd = MiddleEnd.create({
        mods: () => ({
            counter: Counter(middleEnd, options),
            router: Router(middleEnd, options)
        }),
        createStore: (reducer, { router }) => {

            const middleware = [
                MiddleEnd.middleware.thunk,
                options.logErrors && MiddleEnd.middleware.errorLogger,
                router.middleware
            ];

            return Redux.createStore(reducer, ReduxDevtools.composeWithDevTools(
                Redux.applyMiddleware(...middleware.filter(Boolean))
            ));
        }
    });

    return middleEnd;
}

export { create };

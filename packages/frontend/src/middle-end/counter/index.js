import Actions from './actions';
import Reducer from './reducer';
import * as Selectors from './selectors';

// TODO Ok that these imports are top-level (requires were nested, forget why)

export default (m, options) => {

    return {
        reducer: Reducer,
        actions: Actions(m, options),
        selectors: Selectors
    };
};

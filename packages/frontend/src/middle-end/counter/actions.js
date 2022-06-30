import * as MiddleEnd from 'strange-middle-end';
import ActionTypes from './action-types';

const internals = {};

export default (m) => {

    return {
        increment: MiddleEnd.createAction(ActionTypes.INCREMENT, ({ amount }) => {

            return { amount };
        }),
        double: MiddleEnd.createAction(ActionTypes.DOUBLE, async () => {

            await internals.wait(200);

            const currentCount = m.select.counter.getValue();

            m.dispatch.counter.increment({ amount: currentCount });
        })
    };
};

internals.wait = (ms) => {

    return new Promise((resolve) => setTimeout(resolve, ms));
};

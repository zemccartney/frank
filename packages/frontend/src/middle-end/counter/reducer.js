import * as MiddleEnd from 'strange-middle-end';
import ActionTypes from './action-types';

export default MiddleEnd.createReducer(0, {
    [ActionTypes.INCREMENT]: (state, { payload }) => state + payload.amount
});

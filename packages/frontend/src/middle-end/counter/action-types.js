import * as MiddleEnd from 'strange-middle-end';

export default MiddleEnd.createTypes('counter', {
    INCREMENT: MiddleEnd.type.simple,
    DOUBLE: MiddleEnd.type.async
});


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import T from 'prop-types';

const internals = {};

export default function CounterPage({ counter, increment, double }) {

    return (
        <div>
            <Typography variant='h6'>
                <Box fontWeight='fontWeightBold'>
                    Counter: <Box component='span' color='primary.light'>{counter}</Box>
                </Box>
            </Typography>
            <Button onClick={increment}>
                Increment
            </Button>
            <Button onClick={double}>
                Double (Async)
            </Button>
        </div>
    );
}

CounterPage.propTypes = {
    counter: T.number.isRequired,
    double: T.func.isRequired,
    increment: T.func.isRequired
};

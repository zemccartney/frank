import { useSelector } from 'react-redux';
import { useMiddleEnd } from 'strange-middle-end';
import CounterPage from '../components/CounterPage.jsx';

export default function CounterContainer() {

    const m = useMiddleEnd();
    const counter = useSelector(m.selectors.counter.getValue);
    const handleIncrement = () => m.dispatch.counter.increment({ amount: 1 });
    const handleDouble = () => m.dispatch.counter.double();

    return (
        <CounterPage
            counter={counter}
            increment={handleIncrement}
            double={handleDouble}
        />
    );
}

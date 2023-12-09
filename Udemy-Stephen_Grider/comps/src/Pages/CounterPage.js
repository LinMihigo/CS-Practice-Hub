import Button from '../Components/Button';
import useCounter from '../Hooks/use-counter';

function CounterPage({ initialCount }) {

    const { count, increment } = useCounter(initialCount);
    
    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    )
}

export default CounterPage;
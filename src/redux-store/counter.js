import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <h1 className='counter'>Counter: {count}</h1>
            <button className='button' onClick={increment}>Increase</button>
            <button className='button' onClick={decrement}>Decrease</button>
        </div>
    )
}

export default Counter

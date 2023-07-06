import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './toolkit-store'

const Counter = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
  )
}

export default Counter

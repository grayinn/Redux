import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './toolkit-store'

const Counter = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    // return (
    //     <div>
    //         <h1>Counter: {count}</h1>
    //         <button onClick={() => dispatch(increment())}>Increase</button>
    //         <button onClick={() => dispatch(decrement())}>Decrease</button>
    //     </div>
    // )

    // Use bootstrap5
    return (
        <div className="container">
          <h1 className="text-center">Counter: {count}</h1>
          <div className="text-center">
            <button type="button" class="btn btn-outline-danger" onClick={() => dispatch(decrement())}>-</button>
            <button type="button" class="btn btn-outline-primary" onClick={() => dispatch(increment())}>+</button>
          </div>
        </div>
      )
}

export default Counter

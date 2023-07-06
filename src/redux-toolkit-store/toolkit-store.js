import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
})

const store = configureStore({
    reducer: counterSlice.reducer,
})

export const { increment, decrement } = counterSlice.actions

export default store

/**
 * ---------- createSlice:
 * Đơn giản hóa việc định nghĩa reducer và các action
 * 
 *  1. name: 'sliceName',
    2. initialState: initialStateValue,
    3. reducers: {
       action1: (state, action) => {
       },

       action2: (state, action) => {
       }
    }
 */


    
/**
 * ---------- configureStore:
 * Tạo Redux store với các cấu hình và các tính năng bổ sung
 *          
 * - reducer: Đối tượng reducer chứa tất cả các reducer của ứng dụng được kết hợp với nhau. 
 */
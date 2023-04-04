import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Hello ',
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        sayHelloProxima: (state, action) => {
            state.value = initialState.value + action.payload
        },
        sayHelloWorld: (state, action) => {
            state.value = initialState.value + action.payload
        },
        reset: (state, action) => {
            state.value = initialState.value
        }
    }
})

export const { sayHelloProxima, sayHelloWorld, reset } = testSlice.actions

export default testSlice.reducer
import {createSlice} from '@reduxjs/toolkit'


const initialState={
    numOfCakes:10
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        order:(state)=>{
            state.numOfCakes--
        }
    }
})


export default cakeSlice.reducer
export const {order} =cakeSlice.actions
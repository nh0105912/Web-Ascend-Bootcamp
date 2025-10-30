import React from "react";
import {useSelector,useDispatch} from  'react-redux'
import { increment,decrement } from "./CounterSlice";

export const Counter= ()=>{
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();

    return(
        <>
        <h2>Redux toolkit counter</h2>
        <h3>Counter : {count}</h3>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Dercrement</button>

        </>
    )
}

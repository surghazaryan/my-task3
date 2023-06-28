import React from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Number() {
    const dispatch = useDispatch()
    const num = useSelector(function(state){
        return state.main.count
    })
    return (
        <div>
            <button onClick={() => { dispatch({ type: 'minus' }) }}>-</button>
            {num}
            <button onClick={() => { dispatch({ type: 'plus' }) }}>+</button>
        </div>
    )
}


import React from 'react'
import { useStateValue } from '../context/appContext'

export default function Stay() {

    const [state, dispatch] = useStateValue();
    console.log('STATEEEEEEEEEE', state)
    const Cards = state.stay.map(function (item, index) {
        return (
            <button id={item.customId} 
            onClick={()=> {console.log('CLICK', item.customId); return dispatch({type: 'stayClick', customId: item.customId })} } 
            key={index} className="btn btn-light btn-sm btn-outline-secondary mr-4" type="button" style={{ height: '60px' }}>{item.label} <br />desde ${item.bestPrice}</button>
        )
    })
    return (
        <>
            {Cards}
        </>
    )
}
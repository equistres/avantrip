import React from 'react'

export default function Stay({ info, handleClick }) {

    const Cards = info.map(function (item, index) {
        return (
            <button id={item.customId} onClick={handleClick} key={index} className="btn btn-light btn-sm btn-outline-secondary mr-4" type="button" style={{height:'60px'}}>{item.label} <br />desde ${item.bestPrice}</button>
        )
    })
    return (
        <>
            {Cards}
        </>
    )
}
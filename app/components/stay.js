import React from 'react'

export default function Stay({ info, handleClick }) {

    const Cards = info.map(function (item, index) {
        return (
            <button id={item.customId} onClick={handleClick} key={index} className="btn btn-sm btn-outline-secondary mr-4" type="button">{item.label} <br />desde ${item.bestPrice}</button>
        )
    })
    return (
        <>
            {Cards}
        </>
    )
}
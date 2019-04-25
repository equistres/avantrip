import React from 'react'

export default function GetInfo({ packs }) {

        const Cards = packs.map(function (item, index) {
            console.log(item)
            return(
                <button key={index} className="btn btn-sm btn-outline-secondary" type="button">{item.label} <br/>desde ${item.bestPrice}</button>
            )
        })

        return(
            <>
            {Cards}
            </>
        )
}
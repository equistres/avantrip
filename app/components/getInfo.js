import React from 'react'

export default function GetInfo({ packs }) {

        const Cards = packs.map(function (item, index) {

            let title = null;

            if(item.destino.startsWith("Todos")){
                title = item.destino
            }else{
                title = "Viaja por "+item.paquetes[0].description.slice(0, 7)
            }
            
            return (
                <li key={index}>{title} desde ${item.paquetes[0].price.slice(0, 2) + "." + item.paquetes[0].price.slice(2)}</li>
            )
        })

        return(
            <>
            {Cards}
            </>
        )
}
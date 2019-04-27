import React from 'react';
import AllCardsComponent from '../components/allcards';

export default function AllCards({info}) {

    const cards = info.map(function (item, index) {
        return (
            <AllCardsComponent info={item} key={index}/>
        )
    });
    return (
        <div className="row">
            {cards}
        </div>
    )
}

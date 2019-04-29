import React from 'react';
import AllCardsComponent from '../components/allcards';
import { useStateValue } from '../context/appContext'

export default function AllCards() {
    const [state, dispatch] = useStateValue();
    const cards = state.data.map(function (item, index) {
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

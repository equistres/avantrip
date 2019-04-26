import React, { useState, useEffect } from 'react'
import axios from 'axios';
import GetInfoComponent from '../components/getInfo';
import Packs from '../containers/packs';

let content;

const axiosGraphQL = axios.create({
    baseURL: 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',
});

const ALLCARDS = `{
	allStayDatas{
    customId
    label
    bestPrice
  }
  allCards{
        description
        id
        imgUrl
        link
        price
        scale
        stayId
    }
}`;

function useData(defaultResponse) {
    const [data, newData] = useState(defaultResponse);

    function getDataFromApi() {
        axiosGraphQL
            .post('', { query: ALLCARDS })
            .then(result => newData({
                data: result.data.data.allCards,
                stay: result.data.data.allStayDatas,
                fetched: true
            }))
    }

    useEffect(() => {
        getDataFromApi()
    }, []);

    return data;
}




export default function GetInfo() {
    content = useData({ data: null, stay: null, fetched: false })

    return !content.fetched ? (
        <div>loading</div>
    ) : (
            <div className="container">
                <div className="row">
                    <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1397193635/04d53b32c02a4751a2d182e357785176.png" />
                    <span className="mt-5 text-danger">Viajar es la guita mejor invertida</span>
                </div>
                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <GetInfoComponent packs={content.stay} />
                        </form>
                    </nav>
                </div>
                <div className="row"><Packs info={content.data} /></div>
            </div>
        )
}
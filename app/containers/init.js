import React, { useState, useEffect } from 'react'
import axios from 'axios';
import GetInfoComponent from '../components/getInfo';
import Packs from './packs';
import _ from 'lodash';

let content;


const axiosGraphQL = axios.create({
    baseURL: 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',
});

const DEFAULT_QUERY = `{
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

const CUSTOM_QUERY =(customId)=> `{
    allStayDatas{
    customId
    label
    bestPrice
}
allCards(filter:{stayId:"${customId}"}){
    description
    id
    imgUrl
    link
    price
    scale
    stayId
    }
}`;

const getQuery = (customId) => {
    if (customId && customId!=0)
        return CUSTOM_QUERY(customId)
    else
        return DEFAULT_QUERY
};




function getDataFromApi(data, newData) {
    axiosGraphQL
        .post('', { query: data.query })
        .then(result => {
            console.log('THEN result', result)
            console.log('then data', data)
            console.log('then query', data.query);
            newData({
                data: result.data.data.allCards,
                stay: result.data.data.allStayDatas,
                fetched: true,
                query: data.query
            })
        })
    console.log('get data from api')
}


export default function GetInfo() {
    const [data, newData] = useState({ data: null, stay: null, fetched: false, query: getQuery(), customId:0});

    useEffect(() => {
        getDataFromApi(data, newData)
    }, [data.customId]);

    const handleClickEvent = (e) => {
        newData({ data: null, stay: null, fetched: false, query: getQuery(e.target.id), customId: e.target.id })
    }

    data.stay = _.sortBy(data.stay, o => o.customId)

    console.log('render')
    return !data.fetched ? (
        <div>loading</div>
    ) : (
            <div className="container">
                <div className="row">
                    <a href="#" onClick={()=>{location.reload()}}><img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1397193635/04d53b32c02a4751a2d182e357785176.png" /></a>
                    <span className="mt-5 text-danger">Viajar es la guita mejor invertida</span>
                </div>
                <div className="row">
                    <GetInfoComponent packs={data.stay} handleClick={handleClickEvent} />
                </div>
                <div className="row" style={{ width: '1200px' }}>
                    <Packs info={data.data} />
                </div>
            </div>
        )
}
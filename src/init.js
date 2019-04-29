import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import Stay from './components/stay';
import AllCards from './containers/allcards';
import _ from 'lodash';
import './estilos.css';

import { StateProvider, useStateValue } from './context/appContext'

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

const CUSTOM_QUERY = (customId) => `{
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
    if (customId && customId != 0)
        return CUSTOM_QUERY(customId)
    else
        return DEFAULT_QUERY
};
const initialState = { data: null, stay: null, fetched: false}





function getDataFromApi(data, dispatch, customId) {
    console.log('get data from api ANTES')

    axiosGraphQL
        .post('', { query: getQuery(customId) })
        .then(result => {
            console.log('THEN result', result)
            console.log('DATA CUSTOM', customId)
            dispatch({
                type: 'newData',
                data: result.data.data.allCards,
                stay: result.data.data.allStayDatas,
                fetched: true
            })
        })
    console.log('get data from api')
}

export default function GetInfo() {
    const [customId, newCustomId] = useState(0);

    const reducer = (state, action) => {
        console.log('ACTION REDUCER', action)
        console.log('STATE REDUCER', state)
        switch (action.type) {
            case 'stayClick':
                newCustomId(action.customId)
                return state;
            case 'newData':
                console.log('VICTORIA')
                return {...state,
                    data: action.data,
                    stay: action.stay,
                    fetched: action.fetched
                };
            default:
                return state;
        }
    };
    const [data, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        console.log("data en useEffect", data)
        getDataFromApi(data, dispatch, customId)
    }, [customId]);

    console.log('DATAAAAAAAAAAA', data)

    data.stay = _.sortBy(data.stay, o => o.customId)

    console.log('render')
    return !data.fetched ? (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    ) : (
            <StateProvider initialState={data} reducer={reducer}>
                <div className="container">
                    <div className="row">
                        <a href="#" onClick={() => { location.reload() }}><img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1397193635/04d53b32c02a4751a2d182e357785176.png" /></a>
                        <span className="mt-5 text-danger">Viajar es la guita mejor invertida</span>
                    </div>
                    <div className="row mb-3 contenedor" style={{ width: '1214px', height: '150px' }}>
                        <Stay  />
                    </div>
                    <div className="row" style={{ width: '1200px' }}>
                        <AllCards />
                    </div>
                </div>
            </StateProvider>

        )
}
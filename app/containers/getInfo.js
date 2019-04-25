import React, { Component } from 'react'
import axios from 'axios';
import GetInfoComponent from '../components/getInfo';
import _ from 'lodash';

const axiosGraphQL = axios.create({
    baseURL: 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',
});

const ALLCARDS = `{
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


class GetInfo extends Component {
    state = {
        data: null,
        fetched: false
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axiosGraphQL
            .post('', { query: ALLCARDS })
            .then(result => this.setState({
                data: result.data.data.allCards,
                fetched: true,
            }));
    };

    groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
        var result = _.chain(dataToGroupOn)
            .groupBy(fieldNameToGroupOn)
            .toPairs()
            .map(function (currentItem) {
                return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
            })
            .value();
        return result; 
    };

    render() {
        const { fetched, data } = this.state;

        if (fetched) {

            let filterByType = this.groupBy(data, 'imgUrl', 'destino', 'paquetes');
            filterByType = _.sortBy(filterByType, o => o.paquetes.price)
            const orderedByPrice = _.sortBy(data, o => o.price)
            const cheaper = { destino: "Todos los destinos", paquetes: [orderedByPrice[0]] }
            filterByType.unshift(cheaper); 


            return (
                <>
                <ul>
                    <GetInfoComponent packs={filterByType} />
                </ul>
                <ul>
                    <Packs/>
                </ul>

                </>
            )
        } else {
            return (
                <p> Loading...</p>
            )
        }

    }
}
export default GetInfo
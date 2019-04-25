import React, { Component } from 'react'
import axios from 'axios';
import GetInfoComponent from '../components/getInfo';
import Packs from '../containers/packs';
import _ from 'lodash';

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


class GetInfo extends Component {
    state = {
        data: null,
        fetched: false,
        hasFilter: false
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axiosGraphQL
            .post('', { query: ALLCARDS })
            .then(result => this.setState({
                stay: result.data.data.allStayDatas,
                data: result.data.data.allCards,
                fetched: true,
            }));
    };

    // groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
    //     var result = _.chain(dataToGroupOn)
    //         .groupBy(fieldNameToGroupOn)
    //         .toPairs()
    //         .map(function (currentItem) {
    //             return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
    //         })
    //         .value();
    //     return result;
    // };

    render() {
        const { fetched, data, stay } = this.state;

        if (fetched) {

            // let filterByType = this.groupBy(data, 'imgUrl', 'destino', 'paquetes');
            // filterByType = _.sortBy(filterByType, o => o.paquetes.price)

            const orderedStay = _.sortBy(stay, o => o.customId)

            // const cheaper = { destino: "Todos los destinos", paquetes: [orderedByPrice[0]] }
            // filterByType.unshift(cheaper);

            // const allData = this.state.data;

            // if (this.state.hasFilter) {
            //     allData = "";
            // }


            return (
                <>
                    <div className="container">
                        <div className="row">
                            <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1397193635/04d53b32c02a4751a2d182e357785176.png" />
                            <span className="mt-5 text-danger">Viajar es la guita mejor invertida</span>
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-light bg-light">
                                <form className="form-inline">                                    
                                    <GetInfoComponent packs={orderedStay} />
                                </form>
                            </nav>
                        </div>
                        <div className="row"><Packs info={data} /></div>
                    </div>
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
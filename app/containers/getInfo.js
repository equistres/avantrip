import React, {Component} from 'react'

import axios from 'axios';

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
    componentDidMount() {
        console.log("entro al mount");
        this.onFetch();
    }
    onFetch = () => {
        axiosGraphQL
            .post('', { query: ALLCARDS })
            .then(result => console.log(result));
    };
    render() {
        return (
            <div>
aaaaaaaaaaaaaa
            </div>
        )
    }
}
export default GetInfo
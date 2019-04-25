import React, { Component } from 'react';
import PacksComponent from '../components/packs';

class Packs extends Component {
    render() {
        console.log(this.props.info)

        const its = this.props.info.map(function (item, index) {
            return (
                <PacksComponent info={item} key={index}/>
            )
        });

        return (
            <div>
                {its}
            </div>
        )
    }


}

export default Packs



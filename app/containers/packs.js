import React, { Component } from 'react';
import PacksComponent from '../components/packs';

class Packs extends Component {
    render() {

        const its = this.props.info.map(function (item, index) {
            return (
                <PacksComponent info={item} key={index}/>
            )
        });

        return (
            <div className="row">
                {its}
            </div>
        )
    }


}

export default Packs



import React from 'react'

function Packs(props) {
    console.log("estoy en pack.js", props.info)
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={props.info.imgUrl} alt="Card image cap" />
            <div className="row">
                <div className="col-sm">
                <img src="https://www.freeiconspng.com/uploads/airplane-icon--clipart-best-12.png" width="25" alt="Airplane Icon  ClipArt Best" /> Directo
                </div>
                <div className="col-sm">
                    Precio Desde
                </div>
            </div>
            <div className="row">
                <div className="col-sm text-danger">
                    {props.info.description}
                </div>
                <div className="col-sm text-danger">
                    {props.info.price}
                </div>
            </div>
        </div>
    )
}
export default Packs

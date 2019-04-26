import React from 'react'

function Packs(props) {
    return (

        <div className="col-sm-3">
            <div className="card" style={{ width: '275px' }}>
                <img className="card-img-top" src={props.info.imgUrl} alt="Card image cap" height={"230px"} width={"230px"}/>
                <div className="row">
                    <div className="col-7">
                        <img src="https://www.freeiconspng.com/uploads/airplane-icon--clipart-best-12.png" width="25" alt="Airplane Icon  ClipArt Best" /> Directo
                        </div>
                    <div className="col-4">
                        Precio Desde
                        </div>
                </div>
                <div className="row">
                    <div className="col-7 text-danger">
                        {props.info.description}
                    </div>
                    <div className="col-4 text-danger">
                        {props.info.price}
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Packs

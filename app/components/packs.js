import React from 'react'

function Packs(props) {
    return (

        <div className="col-sm-3 mb-2">
            <div className="card" style={{ width: '293px' }}>
                <img className="card-img-top" src={props.info.imgUrl} alt="Card image cap" height={"230px"} width={"230px"} />
                <div className="row">
                    <div className="col-8">
                        <img src="https://www.freeiconspng.com/uploads/airplane-icon--clipart-best-12.png" width="25" alt="Airplane Icon  ClipArt Best" /> Directo
                    </div>
                    <div className="col-3 text-right">
                    <small style={{fontSize: "74%"}}>Precio Desde</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 text-danger">
                    <small>{props.info.description} </small>
                    </div>
                    <div className="col-3 text-danger text-right">
                        {props.info.price}
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Packs

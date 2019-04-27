import React from 'react'

function AllCards({ info }) {
    return (

        <div className="col-sm-3 mb-2">

            <div className="card" style={{ width: '293px' }}>
                <img className="card-img-top" src={info.imgUrl} alt="Card image cap" height={"230px"} width={"230px"} />
                <div className="row">
                    <div className="col-8">
                        <img src="https://www.freeiconspng.com/uploads/airplane-icon--clipart-best-12.png" width="25" alt="Airplane Icon  ClipArt Best" /> Directo
                    </div>
                    <div className="col-3 text-right">
                        <small style={{ fontSize: "74%" }}>Precio Desde</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 text-danger">
                        <small>{info.description} </small>
                    </div>
                    <div className="col-3 text-danger text-right">
                        {info.price}
                    </div>
                </div>
                <div className="row">
                    <a className="ml-auto pr-3" href={info.link} target="_blank">VER VUELO</a>
                </div>

            </div>
        </div>


    )
}
export default AllCards

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import GetInfo from './containers/getInfo';

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1397193635/04d53b32c02a4751a2d182e357785176.png" />
            <span className="mt-5 text-danger">Viajar es la guita mejor invertida</span>
          </div>
          <div className="row"><GetInfo/></div>
          <div className="row">bbbbbbb</div> 
        </div>
      </>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;

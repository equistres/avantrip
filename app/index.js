import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import GetInfo from './containers/getInfo';

class App extends Component {
  render() {
    return (
      <>
        <GetInfo/>
      </>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;

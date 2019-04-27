import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Init from './containers/init';

class App extends Component {
  render() {
    return (
      <>
        <Init/>
      </>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;

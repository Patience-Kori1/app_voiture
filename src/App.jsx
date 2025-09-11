import React, {Component} from 'react';
import './App.css';
import MyCars from './components/MyCars'

class App extends Component {
 state = {
    titre: 'Mon Catalogue Voitures',
    color : 'green'
  };

  changeTitle = () => {
    this.setState({titre: 'Titre en dur'}) 
  };

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre:e.target.value
    })
  }
 
  render () {

  return (
    <div className="appJsx">

      <MyCars
        title={this.state.titre}
        color = {this.state.color}
      />

      <div className="buttonDiv">
        <button onClick={this.changeTitle}> Changer le nom en dur </button>
        <button onClick= {()=>this.changeViaParam('Titre via un parm')}> Changer via param</button>
        <button onClick= {this.changeViaBind.bind(this,'Titre via Bind')}> Changer via Bind </button>

        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
        </div>
    </div>

  )

  }
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, {Component} from 'react'; // l'import React n'a plus d'importance
import Car from './Cars.jsx'
// import './App.css';

class MyCars extends Component {

    state = {
        marques : ["peugeot", "Ford", "Mercedes"]
    }

    render() {
        return (
            <div className="MyCars">

                <h2> MyCars.jsx </h2>
                <h3 style={{ color: this.props.color }}> {this.props.title}</h3>

                <Car color='bleu'>{this.state.marques[0]}</Car>
                <Car color='Rouge'></Car>
                <Car >{this.state.marques[2]}</Car>

            </div>
        )
    }
}

export default MyCars

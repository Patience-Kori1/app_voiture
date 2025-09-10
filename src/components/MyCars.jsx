import React, {Component} from 'react'; // l'import React n'a plus d'importance
import Car from './Cars.jsx'
// import './App.css';

class MyCars extends Component {
    render() {
        return (
            <div class="MyCars">

                <h2> MyCars.jsx </h2>
                <h3>{this.props.title}</h3>

                <Car color='bleu'>Ford</Car>
                <Car color='Rouge'></Car>
                <Car >Peugeot</Car>

            </div>
        )
    }
}

export default MyCars

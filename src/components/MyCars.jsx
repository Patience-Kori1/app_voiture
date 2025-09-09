import React, {Component} from 'react'; // l'import React n'a plus d'importance
import Car from './Cars.jsx'
// import './App.css';

class MyCars extends Component {
    render() {
        return (
            <div class="MyCars">
                <h2> MyCars.jsx </h2>
                <Car/>
            </div>
        )
    }
}

export default MyCars

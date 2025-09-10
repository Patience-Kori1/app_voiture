import React, {Component} from 'react'; // l'import React n'a plus d'importance
import Car from './Cars.jsx';
import MyHeader from './MyHeader.jsx';
// import './App.css';

class MyCars extends Component {

    state = {
        marques : ["peugeot", "Ford", "Mercedes"]
    }

    render() {
        return (
            <div className="MyCars">
                 
                <MyHeader
                    myStyle = {this.props.color} 
                > 
                    {this.props.title} 
                </MyHeader>

                <Car color='bleu'>{this.state.marques[0]}</Car>
                <Car color='Rouge'></Car>
                <Car >{this.state.marques[2]}</Car>

                <MyHeader
                    myStyle = {this.props.color} 
                > 
                    {this.props.title} 
                </MyHeader>

            </div>
        )
    }
}

export default MyCars

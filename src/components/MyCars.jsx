import React, {Component} from 'react'; // l'import React n'a plus d'importance
import Car from './Cars.jsx';
import MyHeader from './MyHeader.jsx';
// import './App.css';

class MyCars extends Component {

    state = {
        marques : ["peugeot", "Ford", "Mercedes"],
    }

    noCopy = () => {
        alert("Merci de ne pas copier le texte");
    }

    addStyle = (e) => {
        // console.log(e.target);

        // if(e.target.classList.contains('styled')) {
        //     e.target.classList.remove('styled');
        // }else {
        //     e.target.classList.add('styled');
        // }

        e.target.classList.contains('styled')? e.target.classList.remove('styled') : e.target.classList.add('styled');
    }
    
 

    render() {
        return (
            <div className="MyCars">


                <MyHeader
                    myStyle = {this.props.color} 
                > 
                    {this.props.title} 
                </MyHeader>

                <p onCopy={this.noCopy} onMouseOver={this.addStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                <Car color='bleu'>{this.state.marques[0]}</Car>
                <Car color='Rouge'></Car>
                <Car >{this.state.marques[2]}</Car>

            </div>
        )
    }
}

export default MyCars

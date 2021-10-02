import {useState, useEffect} from 'react'
import './coffee.css'
import coffee_full from '../images/coffee_full.gif'
import coffee_brewing from '../images/coffee_brewing.gif'
import coffee_empty from '../images/coffee_empty.png'
import axios from 'axios';


const coffee_states = {
    "Empty": {text: "Sadly no coffee :(", image: coffee_empty},
    "Brewing": {text: "Coffee being breewed!", image: coffee_brewing},
    "Full": {text: "Coffee is ready :D", image: coffee_full}
}


function Coffee() {
    const [state, setState] = useState(coffee_states["Empty"])

    useEffect(() => {
        const interval = setInterval(() => {
          fetch("/api/coffee")
          .then(res => res.json())
          .then(coffee_state => setState(coffee_states[coffee_state]))
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const brewing_button = () => {
        axios.post('/api/coffee', 'state=Brewing').then(function (response) {
            console.log(response);
        })
    }
    const empty_button = () => {
        axios.post('/api/coffee', 'state=Empty').then(function (response) {
            console.log(response);
        })
    }

    return (
        <div >
            <h1>Effak</h1>
            <h3>Displays the state of coffee in office A122</h3>
            <img className="coffee_image" src={ state.image } alt={ state.image }/>
            <h2>{ state.text }</h2>
            <button onClick={brewing_button}>Brew</button>
            <button onClick={empty_button}>Empty</button>
        </div>
    );
}

export default Coffee;

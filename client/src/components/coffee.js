import {useState, useEffect} from 'react'
import './coffee.css'
import coffee_full from '../images/coffee_full.gif'
import coffee_brewing from '../images/coffee_brewing.gif'
import coffee_empty from '../images/coffee_empty.png'



const coffee_states = {
    "Empty": {text: "Sadly no coffee :(", image: coffee_empty},
    "Brewing": {text: "Coffee being breewed!", image: coffee_brewing},
    "Full": {text: "Coffee is ready :D", image: coffee_full}
}


function Coffee() {
    const [state, setState] = useState(coffee_states["Empty"])

    useEffect(() => {
        fetch("/api/coffee")
        .then(res => res.json())
        .then(coffee_state => setState(coffee_states[coffee_state]))
    })


    return (
        <div >
            <h1>Effak</h1>
            <h3>Displays the state of coffee in office A122</h3>
            <img className="coffee_image" src={ state.image } alt={ state.image }/>
            <h2>{ state.text }</h2>
        </div>
    );
}

export default Coffee;

import {useState, useEffect} from 'react'
import './coffee.css'
import coffe_mug from '../images/full_coffee.jpg'

function Coffee() {
    const [state, setState] = useState("Empty")

    useEffect(() => {
        fetch("/api/coffee")
        .then(res => res.json())
        .then(customers => setState(customers))
    })


    return (
        <div >
            <h2>Coffee!</h2>
            <h2>{ state }</h2>
            <img src={ coffe_mug }/>
        </div>
    );
}

export default Coffee;

import {useState, useEffect} from 'react'
import './coffee.css'

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
        </div>
    );
}

export default Coffee;

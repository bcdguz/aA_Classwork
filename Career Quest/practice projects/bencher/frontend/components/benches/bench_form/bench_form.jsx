import React from 'react';
import {useState} from 'react';

const BenchForm = ({lat, lng, newBench, history}) => {
    const [desc, setDesc] = useState('');
    const [numSeats, setNumSeats] = useState('');

    const handleButton = (e) => {
        e.preventDefault();
        const bench = {
            description: desc,
            seating: parseInt(numSeats),
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        };
        newBench(bench).then(() => {
            history.push('/');
        })
    }

    const handleChange = (e, type) => {
        if (type === "desc") {
            setDesc(e.target.value);
        } else {
            setNumSeats(e.target.value);
        }
    }

    return (
        <form>
            <label>Description
                <input onChange={(e) => handleChange(e, "desc")} type="text" />
            </label>
            <label>Number of Seats
                <input onChange={(e) => handleChange(e, "seats")} type="text" />
            </label>
            <label>Latitude
                <input disabled={true} type="text" value={lat} />
            </label>
            <label>Longitude
                <input disabled={true} type="text" value={lng}/>
            </label>
            <button onClick={handleButton}>Create Bench</button>
        </form>
    )
}

export default BenchForm;
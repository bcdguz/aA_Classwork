import React from 'react';

const BenchForm = ({lat, lng}) => {

    return (
        <form>
            <label>Description<input type="text" /></label>
            <label>Number of Seats<input type="text" /></label>
            <label>Latitude
                <input disabled={true} type="text" value={lat} />
            </label>
            <label>Longitude
                <input disabled={true} type="text" value={lng}/>
            </label>
        </form>
    )
}

export default BenchForm;
import React from 'react';

const BenchForm = (props) => {

    return (
        <form>
            <label>Description<input type="text" /></label>
            <label>Number of Seats<input type="text" /></label>
            <label>Latitude<input type="text" /></label>
            <label>Longitude<input type="text" /></label>
        </form>
    )
}

export default BenchForm;
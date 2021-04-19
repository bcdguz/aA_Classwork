import React from 'react';

const BenchIndexItem = (props) => {
    return (
        <li key={props.bench.id}>{props.bench.description}</li>
    )
}

export default BenchIndexItem;
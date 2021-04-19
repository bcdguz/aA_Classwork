import React, { useEffect } from 'react';
import BenchIndexItem from './bench_index_item';

const BenchIndex = (props) => {
    useEffect(() => {
        props.fetchBenches();
    }, []);
    
    return (
        <ul>
            {props.benches.map(bench => {
                return (
                    <BenchIndexItem key={bench.id} bench={bench} />
                )
            })}
        </ul>
    )
}

export default BenchIndex;
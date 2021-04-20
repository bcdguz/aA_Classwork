import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';

const Search = (props) => {
    return (
        <div>
            <BenchMap />
            <BenchIndex benches={props.benches} fetchBenches={props.fetchBenches} />
        </div>
    )
}

export default Search;
import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';

const Search = ({benches, fetchBenches, updateBounds}) => {
    return (
        <div>
            <BenchMap updateBounds={updateBounds} benches={benches} />
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
        </div>
    )
}

export default Search;
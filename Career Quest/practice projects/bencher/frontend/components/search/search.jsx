import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';

const Search = ({benches, fetchBenches, updateFilter}) => {
    return (
        <div>
            <BenchMap updateFilter={updateFilter} benches={benches} />
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
        </div>
    )
}

export default Search;
import { fetchBenches } from "../../actions/bench_actions"
import {connect} from 'react-redux';
import Search from "./search";
import { updateFilter } from "../../actions/filter_actions";

const mSTP = (state) => { 
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mDTP = () => {
    return {
        updateFilter: (filter,value) => dispatch(updateFilter(filter,value)),
        fetchBenches: () => dispatch(fetchBenches())
    }
}

const SearchContainer = connect(mSTP, mDTP)(Search);
export default SearchContainer;
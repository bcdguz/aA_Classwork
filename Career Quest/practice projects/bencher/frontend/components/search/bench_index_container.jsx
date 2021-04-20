import { fetchBenches } from "../../actions/bench_actions"
import {connect} from 'react-redux';
import Search from "./search";

const mSTP = (state) => { 
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mDTP = () => {
    return {
        fetchBenches: () => dispatch(fetchBenches())
    }
}

const SearchContainer = connect(mSTP, mDTP)(Search);
export default SearchContainer;
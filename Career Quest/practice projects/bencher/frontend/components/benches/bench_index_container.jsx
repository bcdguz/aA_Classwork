import { fetchBenches } from "../../actions/bench_actions"
import BenchIndex from './bench_index';
import {connect} from 'react-redux';

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

const BenchIndexContainer = connect(mSTP, mDTP)(BenchIndex);
export default BenchIndexContainer;
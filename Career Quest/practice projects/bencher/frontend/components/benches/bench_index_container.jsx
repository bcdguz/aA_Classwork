import { fetchBenches } from "../../actions/bench_actions"
import BenchIndex from './bench_index';

const mSTP = (state) => {
    return {
        benches: state.entities.benches
    }
}

const mDTP = () => {
    return {
        fetchBenches: () => dispatch(fetchBenches())
    }
}

const BenchIndexContainer = connect(mSTP, mDTP)(BenchIndex);
export default BenchIndexContainer;
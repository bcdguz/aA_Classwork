import { connect } from "react-redux";
import { newBench } from "../../../actions/bench_actions";
import BenchForm from "./bench_form";

const mSTP = (state, {location}) => {
    return {
        lat: new URLSearchParams(location.search).get('lat'),
        lng: new URLSearchParams(location.search).get('lng')
    }
}

const mDTP = () => {
    return {
        newBench: ((bench) => newBench(bench))
    }
}

const BenchFormContainer = connect(mSTP, mDTP)(BenchForm);
export default BenchFormContainer;
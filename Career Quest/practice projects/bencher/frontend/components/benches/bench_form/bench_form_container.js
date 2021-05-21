import { connect } from "react-redux";
import BenchForm from "./bench_form";

const mSTP = (state, {location}) => {
    return {
        lat: new URLSearchParams(location.search).get('lat'),
        lng: new URLSearchParams(location.search).get('lng')
    }
}

const BenchFormContainer = connect(mSTP, null)(BenchForm);
export default BenchFormContainer;
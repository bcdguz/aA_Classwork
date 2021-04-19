import { fetchAllBenches } from "../util/bench_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
} 

export const fetchBenches = () => dispatch => {
    return fetchAllBenches()
        .then(benches => dispatch(receiveBenches(benches)));
}
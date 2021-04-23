import { fetchAllBenches } from "../util/bench_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
} 

export const fetchBenches = (filters) => dispatch => {
    return fetchAllBenches(filters)
        .then(benches => dispatch(receiveBenches(benches)));
}
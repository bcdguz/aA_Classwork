import { createBench, fetchAllBenches } from "../util/bench_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

const recieveBench = (bench) => {
    return {
        type: RECEIVE_BENCH,
        bench
    }
}

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
} 

export const newBench = (bench) => (dispatch) => {
    return createBench(bench).then(
        (bench) => dispatch(recieveBench(bench))
    )
}

export const fetchBenches = (filters) => (dispatch) => {
    return fetchAllBenches(filters)
        .then(benches => dispatch(receiveBenches(benches)));
}
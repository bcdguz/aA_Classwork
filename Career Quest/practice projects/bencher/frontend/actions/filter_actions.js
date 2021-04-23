export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import { fetchBenches } from './bench_actions'


const changeFilter = (filter, value) => ({
    type: UPDATE_BOUNDS,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
};

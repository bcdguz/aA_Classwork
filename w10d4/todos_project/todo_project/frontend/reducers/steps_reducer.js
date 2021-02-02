//import { bindActionCreators } from "redux";
import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";


const initialState = {
    1: { // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
    },
    2: { // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
    }
}

const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_STEPS: //check to see if we receive it as a string instead as the variable.
            let newSteps = {};
            for (let i = 0; i < action.steps.length; i++) {
                newSteps[action.steps[i].id] = action.steps[i];
            }
            return newSteps; //Check if correct??
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.id];
            return nextState
        default:
            return oldState;
    }
}

export default stepsReducer;
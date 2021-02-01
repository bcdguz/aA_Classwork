import { connect } from 'react-redux';
import { StepList } from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        receiveSteps: (step) => dispatch(receiveStep(step))
    }
}

const mapStateToProps = () => { //todos, steps
    return {
        stepsByTodoId: (state, todo_id) => stepsByTodoId(state, todo_id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
import { connect } from 'react-redux';
import {TodoDetailView} from './todo_detail_view';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        receiveSteps: (step) => dispatch(receiveSteps(step))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)
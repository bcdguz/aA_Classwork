import { connect } from 'react-redux'
import {TodoDetailView} from './todo_detail_view'
import { receiveTodo, removeTodo } from '../../actions/todo_actions'

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)
import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting"

const mapStateToProps = (state) => {
    const currentUser = state.session.id ? state.entities.users[state.session.id] : null;

    return {
        currentUser
    }
}

const mapDispatchToProps = () => {
    return {
        logout: () => dispatch(logout())
    }
}

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);
export default GreetingContainer;
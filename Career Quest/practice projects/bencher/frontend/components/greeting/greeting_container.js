import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting"

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.user[state.session.id]
    }
}

const mapDispatchToProps = () => {
    return {
        logout: () => {dispatch(logout())}
    }
}

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);
export default GreetingContainer;
import { connect } from "react-redux";
import SignupComponent from "./signup";
import { signup } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.session
    }
}

const mDTP = () => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

const SignupContainer = connect(mSTP, mDTP)(SignupComponent);
export default SignupContainer;
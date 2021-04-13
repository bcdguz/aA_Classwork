import { connect } from "react-redux";
import LoginComponent from "./login";

const mSTP = (state) => {
    return {
        errors: state.errors.session
    }
}

const mDTP = () => {
    return {
        login: (user) => dispatch(login(user))
    }
}

const LoginContainer = connect(mSTP, mDTP)(LoginComponent);
export default LoginContainer;
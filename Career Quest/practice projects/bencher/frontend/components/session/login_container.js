import { connect } from "react-redux"
import LoginComponent from "./login"

const mapDispatchToProps = () => {
    return {
        login: (user) => dispatch(login(user))
    }
}

const LoginContainer = connect(null, mapDispatchToProps)(LoginComponent);
export default LoginContainer;
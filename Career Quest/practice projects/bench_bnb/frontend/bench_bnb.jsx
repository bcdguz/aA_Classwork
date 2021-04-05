import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Bench</h1>, root);

    //testing methods
    window.login = login;
    window.signup = signup;
    window.logout = logout;
})
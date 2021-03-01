import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from './weather';

const Root = () => {
    return (<div>
        <Clock />
        <Tabs array={[{"title": 'one',"content": 'I am the first'},
         {"title": 'two',"content": 'I am the second'}, {"title": 'three',"content": 'I am the third'}]}/>
        <Weather />
    </div>);
}

export default Root;
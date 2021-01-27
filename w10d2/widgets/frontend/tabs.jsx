import React from 'react';

class Tabs extends React.Component {
    constructor({title,content}){
        // super(props);
        this.state = {index: 0};
    }
    render(){
        return (
            <ul>
                {title}
            </ul>
        );
    }
}
export default Tabs;
import React from 'react';
import Header from './header';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {index: 0};
        this.updateIndex = this.updateIndex.bind(this);
    }
    updateIndex(id) {
        // debugger
        this.setState({ index: id })
    }
    render(){
        // console.log(this.state.index)
        const tabsArr = this.props.array.map((tab, idx) => {
            return(
                <Header
                    key={idx}
                    id={idx}
                    title={tab.title}
                    content={tab.content}
                    handleClick={ this.updateIndex }
                />
                // <>
                //     <ul>{tab.title}</ul>
                //     <article>{tab.content}</article>
                // </>
                );
        });
        return (
            <>
                {tabsArr}
            </>
        );
    }
}
export default Tabs;
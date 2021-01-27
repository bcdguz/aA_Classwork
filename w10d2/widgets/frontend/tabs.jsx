import React from 'react';
import Header from './header';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {index: 0};
    }
    render(){
        const tabsArr = this.props.array.map((tab) => {
            return(
                <Header
                    key={tab.id}
                    title={tab.title}
                    content={tab.content}
                    onClick={  }
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
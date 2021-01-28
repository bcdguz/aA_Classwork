import React from 'react';
import * as Minesweeper  from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'tile'
        }
    }
    
    handleClick (e) {
        const _tile = this.props.tileObj;
        let tileClass = '';
        if(_tile.bombed) {
            titleClass = 'bombed';
            //&#x1F4A3;
        } else if(_tile.explored) {
            tileClass = 'explored';
        } else if(_tile.flagged){
            tileClass = 'flagged';
            //&#x26F3;
        }
        this.setState({ className: tileClass})
    }
    
    render() {
        return(
            <>
                <div className={this.state.className} onClick={}></div>
            </>
        );
    };
};



export default Tile;
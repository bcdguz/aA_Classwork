import React from 'react';
import * as Minesweeper  from '../minesweeper';

class Tile extends React.Component {

    
    render() {
        const _tile = this.props.tileObj;
        let tileState = <div className="tile">blank</div>;
        if(_tile.bombed) {
            tileState = <div className="tile"></div>
            //&#x1F4A3;
        } else if(_tile.explored) {
            tileState = <div className="tile">_tile.adjacentBombCount()</div>;
        } else if(_tile.flagged){
            tileState = <div className="tile"></div>;
            //&#x26F3;
        }
        return(
            <>
                <div className="tile" onClick={}></div>
            </>
        );
    };
};



export default Tile;
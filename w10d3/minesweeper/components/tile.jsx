import React from 'react';
import * as Minesweeper  from '../minesweeper';

class Tile extends React.Component {

    
    render() {
        //logic here
        const _tile = this.props.tileObj;
        let tileState = <div className="tile">blank </div>;
        if(_tile.bombed) {
            tileState = <div className="tile">&#x1F4A3;</div>
        } else if(_tile.explored) {
            tileState = <div className="tile">_tile.adjacentBombCount()</div>;
        } else if(_tile.flagged){
            tileState = <div className="tile">&#x26F3;</div>;
        }
        return(
            <>
                {tileState}
            </>
        );
    };
};



export default Tile;
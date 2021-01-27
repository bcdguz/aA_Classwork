import React from 'react';
import * as Minesweeper  from '../minesweeper';

class Tile extends React.Component {

    
    render() {
        const tileSize = 600.0 / this.props.size;

        const _tile = this.props.tileObj;
        let tileState = <div style={{height:`${tileSize}px`, width:`${tileSize}px`}} className="tile">blank </div>;
        if(_tile.bombed) {
            tileState = <div style={{height:`${tileSize}px`, width:`${tileSize}px`}} className="tile">&#x1F4A3;</div>
        } else if(_tile.explored) {
            tileState = <div style={{height:`${tileSize}px`, width:`${tileSize}px`}} className="tile">_tile.adjacentBombCount()</div>;
        } else if(_tile.flagged){
            tileState = <div style={{height:`${tileSize}px`, width:`${tileSize}px`}} className="tile">&#x26F3;</div>;
        }
        return(
            <>
                {tileState}
            </>
        );
    };
};



export default Tile;
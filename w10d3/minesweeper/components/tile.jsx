import React from 'react';
import * as Minesweeper  from '../minesweeper';

class Tile extends React.Component {

    
    render() {
        //logic here
        const _tile = this.props.tileObj;
        let tileState = '';
        if(_tile.bombed) {
            tileState = 'bomb';
        } else if(_tile.explored) {
            tileState = _tile.adjacentBombCount();
        } else {
            tileState = 'flag';
        }
        return(
            <h1>T</h1>
        );
    };
};



export default Tile;
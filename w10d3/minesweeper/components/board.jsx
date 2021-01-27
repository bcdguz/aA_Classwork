import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

class Board extends React.Component {

    render() {
        const arr = this.props.board.map((row, idx) => {
            return(
                row.map((tile, idx) => {
                    return(
                    <Tile tileObj={tile} updateGame={this.props.updateGame} />
                    )
                })
            )
        })
        return (
            <div>
                
            </div>
        );
    }
};

export default Board;



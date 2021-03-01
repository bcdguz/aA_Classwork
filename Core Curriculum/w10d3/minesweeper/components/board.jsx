import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

class Board extends React.Component {

    render() {
        let grid = this.props.board.grid;
        const arr = grid.map((row) => {
            return(
                row.map((tile, idx) => {
                    return(
                    <Tile tileObj={tile} updateGame={this.props.updateGame} key={idx} size={grid.gridSize}/>
                    )
                })
            )
        })
        return (
            <div className="board">
                {arr}
            </div>
        );
    }
};

export default Board;



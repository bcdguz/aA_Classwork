// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = Array(8).fill().map(() => Array(8).fill());
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if(pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7){
    return false;
  }
  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(!this.isValidPos(pos)){
    throw new Error('Not valid pos!');
  }
  [x,y] = pos;
  return this.grid[x][y];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if(this.getPiece(pos)){
    return this.getPiece(pos).color === color;
  }
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  // if(this.getPiece(pos)){
  //   return true;
  // }
  // return false;
  return this.getPiece(pos) ? true : false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  // if hits empty pos, if no piece of oppos color found, if reaches end of board 
  // then return empty array

  // if hit piece of same color 
  //  -> return array of all pieces between starting pos and end pos

  if (piecesToFlip === undefined) { 
    piecesToFlip = [];
  }
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (!this.isValidPos(nextPos) || !this.isOccupied(nextPos)) {
    return [];
  } else if (this.getPiece(nextPos).color === color) {
    return piecesToFlip;
  } else {
    piecesToFlip.push(nextPos);
    return this._positionsToFlip(nextPos, color, dir, piecesToFlip);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  // [0,0], "black"
  // _positionsToFlip -> array 
  // add all pieces of each direction

  if (!this.isOccupied(pos)){
    //iterate through each direction
    // return true if one is not-empty
    return Board.DIRS.some(
      dir => this._positionsToFlip(pos, color, dir).length > 0
    );
  }
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if(!this.validMove(pos, color)) {
    throw new Error ('Invalid move!');
  } else {
    Board.DIRS.forEach( 
      dir => {
        this._positionsToFlip(pos, color, dir).forEach(
          piecePos => this.grid[piecePos[0]][piecePos[1]].color = color
        )
      }
     )
    this.grid[pos[0]][pos[1]] = new Piece(color);
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let validMoveArr = [];
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (this.validMove([i,j], color)) {
        validMoveArr.push([i,j]);
      }
    }
  }
  return validMoveArr;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return !!this.validMoves(color).length;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !this.hasMove('black') && !this.hasMove('white')
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  console.log(this.grid.map(
    row => row.map(
      piece => piece ? piece.toString() : ' '
    ).join(' ')).join('\n'))
};

Board.prototype.isLost = function(color) {
  if (!this.isOver()) {
    return false;
  }

  let whiteCount = 0;
  let blackCount = 0;

  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if(this.isOccupied([i,j])) {
        if(this.grid[i][j].color === 'white') {
          whiteCount += 1;
        } else {
          blackCount += 1;
        }
      }
    }
  }

  if (color === 'white') {
    return whiteCount < blackCount;
  } else {
    return blackCount < whiteCount;
  }
}

Board.prototype.isWon = function (color) {
  if (!this.isOver()) {
    return false;
  }

  let whiteCount = 0;
  let blackCount = 0;

  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (this.isOccupied([i, j])) {
        if (this.grid[i][j].color === 'white') {
          whiteCount += 1;
        } else {
          blackCount += 1;
        }
      }
    }
  }

  if (color === 'white') {
    return whiteCount > blackCount;
  } else {
    return blackCount > whiteCount;
  }
}
// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE

Board.prototype.fillAll = function(color) {
  this.grid = this.grid.map( 
    row => row.map ( 
      () => new Piece(color)
    )
  )
}
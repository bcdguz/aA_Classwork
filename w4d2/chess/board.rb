require_relative 'piece.rb'

class Board
  def initialize
    @rows = Array.new(8){Array.new(8)}
    @null_piece = nil   #come back to this... singleton
    fill_board          
  end

  def test_print
    test_rows = @rows.map do |row|
      if row.any? {|el| el == nil}
        row
      else
        row.map {|piece| piece.color} 
      end
    end
    test_rows.each do |row|
      p row
    end
    return nil
  end

  def [](pos)
    @rows[pos[0]][pos[1]]
  end

  def []=(pos, value)
    @rows[pos[0]][pos[1]] = value
  end

  def move_piece(color, start_pos, end_pos)
    row_start, col_start = start_pos
    row_end, col_end = end_pos
    raise "No piece here" if @rows[row_start][col_start] == nil
    raise "Out of bounds" if row_end < 0 || row_end > 7
    raise "Out of bounds" if col_end < 0 || col_end > 7
    raise "Same color piece here" if @rows[row_end][col_end] != nil && @rows[row_end][col_end].color == color 
    piece = @rows[row_start][col_start]
    @rows[row_end][col_end] = piece
    piece.pos = end_pos
    @rows[row_start][col_start] = nil

  end


  def fill_board
    white_pawns = [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
    black_pawns = [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]]
    white_rook = [[0,0],[0,7]]
    black_rook = [[7,0],[7,7]]
    white_knight = [[0,1],[0,6]]
    black_knight = [[7,1],[7,6]]
    white_bishop = [[0,2],[0,5]]
    black_bishop = [[7,2],[7,5]]
    white_king = [[0,3]]
    black_king = [[7,3]]
    white_queen = [[0,4]]
    black_queen = [[7,4]]
    white_pieces = [white_pawns,white_rook,white_knight,white_bishop,white_king,white_queen]
    black_pieces = [black_pawns,black_rook,black_knight,black_bishop,black_king,black_queen]
  
    white_pieces.each do |matrix|
      matrix.each do |pos|
        row, col = pos
        @rows[row][col] = Piece.new(:white, self, pos)
      end
    end

    black_pieces.each do |matrix|
      matrix.each do |pos|
        row, col = pos
        @rows[row][col] = Piece.new(:black, self, pos)
      end
    end


  end


end

b = Board.new
b.test_print
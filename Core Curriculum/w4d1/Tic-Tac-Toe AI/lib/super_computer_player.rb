require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    node = TicTacToeNode.new(game.board, mark)
    node.children.each { |child_node| return child_node.prev_move_pos if child_node.winning_node?(mark) }
    node.children.each { |child_node| return child_node.prev_move_pos if !child_node.losing_node?(mark) }
    raise "No not-losing nodes :("
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end

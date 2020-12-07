require 'byebug'
require_relative 'poly_tree'

class KnightPathFinder
    attr_reader :current_pos
    attr_accessor :considered_positions

    def initialize(current_pos)
        @current_pos = current_pos
        @considered_positions = []
        @node = nil
        #build_move_tree
    end

    def self.valid_moves(pos)
        possible_moves = []

        move_1 = [pos[0]+1, pos[1]+2]
        possible_moves << move_1 if KnightPathFinder.in_bounds?(move_1)

        move_2 = [pos[0]-1, pos[1]+2] 
        possible_moves << move_2 if KnightPathFinder.in_bounds?(move_2)

        move_3 = [pos[0]+1, pos[1]-2]
        possible_moves << move_3 if KnightPathFinder.in_bounds?(move_3)

        move_4 = [pos[0]-1, pos[1]-2]
        possible_moves << move_4 if KnightPathFinder.in_bounds?(move_4)

        move_5 = [pos[0]+2, pos[1]+1]
        possible_moves << move_5 if KnightPathFinder.in_bounds?(move_5)

        move_6 = [pos[0]-2, pos[1]+1] 
        possible_moves << move_6 if KnightPathFinder.in_bounds?(move_6)

        move_7 = [pos[0]+2, pos[1]-1]
        possible_moves << move_7 if KnightPathFinder.in_bounds?(move_7)

        move_8 = [pos[0]-2, pos[1]-1]
        possible_moves << move_8 if KnightPathFinder.in_bounds?(move_8)

        possible_moves
    end

    # Helper Method
    def self.in_bounds?(pos)
        return false if pos[0] < 0 || pos[0] > 7
        return false if pos[1] < 0 || pos[1] > 7
        return true
    end

    def new_move_positions(pos)

        filtered_pos = KnightPathFinder.valid_moves(pos)
        answers = filtered_pos.select do |position|
            !@considered_positions.include?(position)
        end

        @considered_positions += answers
        answers
    end

    def build_move_tree
        queue = [@current_pos]
        queue += new_move_positions(queue[0])
        current = queue.shift
        @node = PolyTreeNode.new(current)
        @considered_positions << current

        while !queue.empty?
            new_pos = queue[0]
            new_node = PolyTreeNode.new(new_pos)
            
            
        end
    end

end

new_knight = KnightPathFinder.new([0,0])
new_knight.build_move_tree


        # queue = new_move_positions(@root_node.value).map {|pos| PolyTreeNode.new(pos)} #[a bunch positions] we want thesto be root's children
        # queue.each {|root_kids| @root_node.add_child(root_kids)}

        # until queue.empty?    

        # end
            # top_pos = queue.shift
            # #debugger
            # knight = KnightPathFinder.new(top_pos.value)
            # knight.considered_positions += @considered_positions
            
            # kids = knight.new_move_positions(top_pos.value)
            # kid_instances = kids.map {|kid| PolyTreeNode.new(kid)}
            # kid_instances.each {|kid| top_pos.add_child(kid)}

            # queue += kid_instances
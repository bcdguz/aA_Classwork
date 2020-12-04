class PolyTreeNode
    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)

        if @parent
            @parent.children.delete(self)
        end

        @parent = new_parent
        new_parent.children << self if new_parent
    end

    def add_child(child_node)
        child_node.parent = self
        self.children << child_node if !self.children.include?(child_node)
    end

    def remove_child(child_node)
        raise if child_node.parent == nil
        child_node.parent = nil
    end

    def dfs(target_value)

        return self if self.value == target_value

        self.children.each do |child|
            child_result = child.dfs(target_value)
            return child_result if child_result != nil
        end

        nil
    end

    def bfs(target_value)

        queue = [self]

        until queue.length == 0
            first_node = queue.shift
            return first_node if first_node.value == target_value
            first_node.children.each { |child| queue << child }
        end

        nil
    end

end


class KnightPathFinder

    def initialize(starting_pos)
        @root_node = PolyTreeNode.new(starting_pos)
        @considered_positions = [starting_pos]
    end

    def self.valid_moves(pos)
        possible_moves = []

        move_1 = [pos[0]+1, pos[1]+2]
        possible_moves << move_1 if in_bounds?(move_1)

        move_2 = [pos[0]-1, pos[1]+2] 
        possible_moves << move_2 if in_bounds?(move_2)

        move_3 = [pos[0]+1, pos[1]-2]
        possible_moves << move_3 if in_bounds?(move_3)

        move_4 = [pos[0]-1, pos[1]-2]
        possible_moves << move_4 if in_bounds?(move_4)

        move_5 = [pos[0]+2, pos[1]+1]
        possible_moves << move_5 if in_bounds?(move_5)

        move_6 = [pos[0]-2, pos[1]+1] 
        possible_moves << move_6 if in_bounds?(move_6)

        move_7 = [pos[0]+2, pos[1]-1]
        possible_moves << move_7 if in_bounds?(move_7)

        move_8 = [pos[0]-2, pos[1]-1]
        possible_moves << move_8 if in_bounds?(move_8)

        possible_moves
    end

    # Helper Method
    def in_bounds?(pos)
        return false if pos[0] < 0 || pos[0] > 7
        return false if pos[1] < 0 || pos[1] > 7
    end

    def build_move_tree

    end

    def new_move_positions(pos)

        filtered_pos = KnightPathFinder.valid_moves(pos)
        answers = filtered_pos.select do |position|
            !@considered_positions.include?(position)
        end

        @considered_positions += answers
        answers
    end

end
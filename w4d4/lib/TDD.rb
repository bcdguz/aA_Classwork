class Array
    def my_uniq
        uniq = []
        self.each { |el| uniq << el if !uniq.include?(el) }
        uniq
    end

    def two_sum
        pairs = []
        (0...self.length-1).each do |i|
            (i...self.length).each do |j|
                pairs << [i,j] if self[i] + self[j] == 0 && i < j
            end
        end
        pairs
    end

    def my_transpose
        transpose = []
        
        self.each_with_index do |row, i|
            new_row = []
            self.each_with_index do |el, j|
                new_row << self[j][i]
            end
            transpose << new_row
        end
        transpose
    end

    def stock_picker
        pair = []
        sum = 0
        (0...self.length - 1).each do |i|
            (i+1...self.length).each do |j|
                temp = []
                if self[j] - self[i] > sum 
                    sum = self[j] - self[i]
                    temp << self[i]
                    temp << self[j] #pair = [something]
                    pair = temp
                end
               
            end
        end
        pair
    end
end

# class Hanoi
# board 2D  array with length 3 and each value is an array
# @board[0] fill it from (1..4)
#[1, 2, 3, 4]
# you can pick only from the top(front of array) and 1 disk at the time
# #move user will type in a start and an end, check is that valid input
# #move will take the top disk(front el from array) and place it in the top of the end(front of the array)
# #won? all disks are in array[2] and sorted from 1..4

class Hanoi
    attr_accessor :board
    def initialize
        @board = Array.new(3) {Array.new() }
    end
    
    def store_tower
        @board[0] += [1, 2, 3, 4]
    end

    def play
        store_tower
        playing = true
        while playing
            move
            playing = false if won?
        end
    end

    def won?
        @board[2] == [1,2,3,4] && @board[0].empty?
    end

    def valid_move?(idx1, idx2)
        return true if @board[idx2][0] == nil
        @board[idx1][0] < @board[idx2][0]
    end

    def move # "1 2"
        input = true
        while input
            puts "Enter start pile and end-pile idx (Ex: 1 2)"
            user_input = gets.chomp.split(' ').map { |el| el.to_i }
            input = false if valid_move?(user_input[0], user_input[1])    
        end
        current_disk = @board[user_input[0]].shift
        @board[user_input[1]].unshift(current_disk)
        
    end
end

#move
#ask user for input two i values
#input gets,chomp [two i]

#valid move?(idx1, idx2)
#
hanoi = Hanoi.new


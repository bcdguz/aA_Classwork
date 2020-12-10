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


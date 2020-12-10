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
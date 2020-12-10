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
end
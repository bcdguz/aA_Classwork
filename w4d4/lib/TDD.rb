class Array
    def my_uniq
        uniq = []
        self.each { |el| uniq << el if !uniq.include?(el) }
        uniq
    end

end
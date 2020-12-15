class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if !num.between?(0,(@store.length - 1))
    return false if @store[num]
    self.store[num] = true
    
  end

  def remove(num)
    @store[num] = false
  end

  def [](num)
    self.store[num]
  end

  def include?(num)
    @store[num] == true 
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end

end


class IntSet

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num if !self[num].include?(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % @store.length]
  end

  def num_buckets
    @store.length
  end

end

class ResizingIntSet
  attr_accessor :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new } #[[2,5,1],[7],[32]] 0 , 1 , 2
    @count = 0
  end

  def insert(num)
    return false if self[num].include?(num)
      
    self[num] << num 
    @count += 1
     
    resize! if num_buckets < self.count
  end

  def remove(num)
    self.count -= 1 if self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private       

  def [](num)
      @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    store_reset = self.store
    #self.count = 0
    self.store = Array.new(num_buckets * 2) {Array.new}
    store_reset.flatten.each { |num| self.store[num % num_buckets] << num } #@store[num % n] << num }
    #store_reset.flatten.each { |num| insert(num) } <--- how specs set up the problem to be solved but you don't need
  end


end



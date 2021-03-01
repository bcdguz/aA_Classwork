require_relative 'MyStack'

class StackQueue
  def initialize
    @first_stack = MyStack.new
    @last_stack = MyStack.new

  end

  def size
    @first_stack.size + @last_stack.size
  end

  def empty?
    
  end

  def enqueue
    
  end


end


# First In - Last Out

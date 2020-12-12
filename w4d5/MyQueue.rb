class MyQueue

    def initialize
        @store = []
    end

    def peek
        @store.last
    end

    def size
        @store.size
    end

    def empty?
        @store.empty?
    end

    def enqueue(el)
        @store.unshift(el)
    end

    def dequeue
        @store.pop
    end
end
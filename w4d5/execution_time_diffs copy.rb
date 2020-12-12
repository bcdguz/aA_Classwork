def my_min(arr) #time complexity: O(n**2)
    #min = 0
    arr.each_with_index do |num, idx| #[-5]
        min = num
        arr.each_with_index do |num2, idx2|
            if idx < idx2 && num2 < num 
                min = num2
            end
        end
        return min if min == num
    end
    #min
end

def my_min2(arr) #time complexity: O(n)
    min = arr[0]
    arr.each do |num|
        min = num if num < min
    end
    min
end


#p my_min2([ 0, 3, 5, 4, -5, 10, 1, 90 ])

def sub_sum(arr) #time complexity: O(n^3)
    sums = []
    arr.each_with_index do |sub_a, i|
      arr.each_with_index do |sub_b, j|
        if i == j
          sums << [sub_a]
        elsif i < j
          sums << arr[i..j]
        end
      end  
    end

    max = sums[0].sum 
    sums.each do |sub|
      max = sub.sum if sub.sum > max
    end
    max
end

list = [5, 3, -7]
# p sub_sum(list)


def sub_sum2(arr)   #Time Complexity: O(n)
  largest_sum = arr[0]
  curr_sum = arr[0]

  arr.each_with_index do |num, i|
    if curr_sum < 0
      curr_sum = arr[i]
    else
      curr_sum += arr[i] if arr[i] != arr[0]
    end
    if curr_sum > largest_sum
      largest_sum = curr_sum
    end
  end
  largest_sum
end

list2 = [2, 3, -6, 7, -6, 7]
list3 = [-5, -1, -3]

p sub_sum2(list2)
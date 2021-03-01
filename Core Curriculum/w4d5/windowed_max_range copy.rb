def windowed_max_range(arr, size) # O(n^2)
  cur_max = 0
  (0..arr.length-size).each do |i|
    max = arr[i...i+size].max 
    min = arr[i...i+size].min

    window = max - min
    cur_max = window if window > cur_max
  end
  cur_max
end

# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) # 4
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) # 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) # 6
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) # 6
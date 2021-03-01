def first_anagram?(str_1, str_2) # O(n^3)
  anagrams = str_1.split("").permutation.to_a
  anagrams.map! { |word| word.join("") }
  anagrams.include?(str_2)
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str_1, str_2) #Time Complexity: O(n^2)
  target = str_2.split("")
  str_1.each_char.with_index do |char, i|
    idx = target.find_index(char)
    target.delete_at(idx) if idx
  end
  target.empty?  
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str_1, str_2) #Time Complexity: O(n log n)
  sorted_1 = str_1.split('').sort.join('')
  sorted_2 = str_2.split('').sort.join('')
  sorted_1 == sorted_2
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(str_1, str_2) #Time Complexity: O(n)
  hash_1 = Hash.new(0)
  hash_2 = Hash.new(0)
  str_1.each_char { |char| hash_1[char] += 1 }
  str_2.each_char { |char| hash_2[char] += 1 }
  p hash_1
  p hash_2
  hash_1 == hash_2
end

# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true

def bonus_anagram?(str_1, str_2) #Time Complexity: O(n)
  hash_1 = Hash.new(0)
  str_1.each_char { |char| hash_1[char] += 1 }
  str_2.each_char { |char| hash_1[char] -= 1 }
  # p hash_1
  # p hash_2
  hash_1.values.all? { |v| v == 0 }
end

# p bonus_anagram?("gizmo", "sally")    #=> false
# p bonus_anagram?("elvis", "lives")    #=> true


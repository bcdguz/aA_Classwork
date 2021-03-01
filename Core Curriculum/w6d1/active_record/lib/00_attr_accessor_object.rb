
class AttrAccessorObject
  def self.my_attr_accessor(*names)

    names.each do |var|
      inst_var = '@' + var.to_s

      define_method(var) do 
        instance_variable_get(inst_var)
      end
      
      define_method("#{var}=") do |val|
        instance_variable_set(inst_var, val)
      end
    end
  end
end

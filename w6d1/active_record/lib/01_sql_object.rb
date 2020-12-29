require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject

  def self.columns
    return @cols if @cols
    @cols = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{table_name}
    SQL

    @cols[0].map {|name| name.to_sym}
  end

  def self.finalize!
    columns.each do |column|
      define_method(column) do
        attributes[column] 
      end

      col_name = column.to_s

      define_method("#{col_name}=") do |val|
        attributes[column] = val
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    params.each do |key,value|
      attr_name = key.to_sym
      raise "unkown attribute '#{attr_name}'" if !self.class.columns.include?(attr_name)
      self.send("#{attr_name}=",value)
    end
  end

  def attributes
    @attributes ||= {}
  end


  def attribute_values
    
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end

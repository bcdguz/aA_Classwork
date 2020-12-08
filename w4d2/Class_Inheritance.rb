class Employee

    def initialize(name, title, salary, boss)
        @name = name    
        @title = title
        @salary = salary
        @boss = boss

    end

    def bonus(multiplier)
        @bonus = @salary * multiplier
    end

end

class Manager < Employee

    def initialize(name, title, salary, boss)
        super
        @employees = []
    end

    def bonus(multiplier)
        super(multiplier)
        employee_salary = 0
        @employees.each do |employee|
            employee_salary += employee.salary
        end
        @bonus = multiplier * employee_salary
    end

end

ned = Manager.new("Ned", "Founder", 1000000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, "Ned")
shawna = Employee.new("Shawna", "TA", 12000, "Darren")
david = Employee.new("David", "TA", 10000, "Darren")

p ned.bonus(5)
p darren.bonus(4)
p david.bonus(3)
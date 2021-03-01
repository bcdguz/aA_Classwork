class Enrollment < ApplicationRecord

    belongs_to :student,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User

    #secretly this is a method that takes a symbol of the name of the method we are to create
    #second is an options hash that tells rails how to create the method
    #belongs_to( :student, {primary_key: :id, :foreign_key=>:student_id, :class_name=>'User'})

    belongs_to :course,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Course
end

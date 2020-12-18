class User < ApplicationRecord


    has_many :enrollments,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :Enrollment

    #enrollment must be defined before 
    #has_many through since through is using 
    #enrollment to get to course
    has_many :courses,
        through: :enrollments,
        source: :course
end

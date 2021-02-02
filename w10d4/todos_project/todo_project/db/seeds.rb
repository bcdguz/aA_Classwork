# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all
todo1 = Todo.create!(title: "this one", body: "that one", done: false)
todo2 = Todo.create!(title: "this two", body: "that two", done: true)
todo3 = Todo.create!(title: "this three", body: "that three", done: false)
todo4 = Todo.create!(title: "this four", body: "that four", done: true)
todo5 = Todo.create!(title: "this five", body: "that five", done: false)

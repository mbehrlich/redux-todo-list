# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


todo1 = Todo.create(title: 'Todo 1', body: 'Do some stuff')
todo2 = Todo.create(title: 'Todo 2', body: 'Do some more stuff')
todo3 = Todo.create(title: 'Completed todo', body: 'Done stuff', done: true)

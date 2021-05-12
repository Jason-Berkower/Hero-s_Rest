# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Character.destroy_all
Post.destroy_all
Comment.destroy_all

# USER LIST
@table_master = User.create!(username: 'Table_Master', email: 'thetablenator@mastery.com', password_digest: 'tabletabletabletabletable')
@serious36 = User.create!(username: 'Serious36', email: 'seriouslyguys@36ers.co.uk', password_diget: 's56g7[p_iaGhD2?sO=')
@bigbys_fan29 = User.create!(username: 'Bigbys_fan29', email: 'floatinghands@bigbyhome.deu', password_digest: 'BiGbYsMiGhTyHaNd2')
puts "#{User.count} users created!"
# CHARACTER LIST

puts "#{Character.count} characters created!"
# POST LIST

puts "#{Post.count} posts created!"
# COMMENT LIST

puts "#{Comment.count} comments created!"
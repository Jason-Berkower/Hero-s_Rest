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
@periwinkle_petorax = Character.create!(name: 'Periwinkle Petorax', race: 'Fae-Touched Tiefling', class: 'Druid', img_url: 'https://cdnb.artstation.com/p/assets/images/images/024/262/295/large/taras-susak-widow.jpg?1581859803', user: @serious36)
@bigby = Character.create!(name: 'Bigby', race: 'Human', class: 'Wizard', img_url: 'https://i.pinimg.com/originals/b7/0a/2e/b70a2e2d26948893534bf88f49d24d98.jpg', user: @bigbys_fan29)
@proff_grizz = Character.create!(name: 'Professor Grizz Gristlethatch', race: 'Bearfolk', class: 'Artificer', img_url: 'https://cdnb.artstation.com/p/assets/images/images/037/608/151/large/rudy-siswanto-profesor-zoomancy-color2.jpg?1620829612', user: @table_master)
puts "#{Character.count} characters created!"
# POST LIST

puts "#{Post.count} posts created!"
# COMMENT LIST

puts "#{Comment.count} comments created!"
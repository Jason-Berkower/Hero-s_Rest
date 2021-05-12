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
@requesting_extra_rations = Post.create!(title: 'Requesting Extra Rations', content: "I can't believe it, but I left town without packing enough food. Does anyone have some extra rations they can spare?", character: @periwinkle_petorax, user: @serious36)
@expanding_spellbooks = Post.create!(title: 'Expanding Spellbooks', content: "Finally, I've reached the end of my fifth spellbook. Not to worry; I'll simply shove more pages into it! Take that, Mordenkainen!", character: @bigby, user: @bigbys_fan29)
@a_note_about_butterflies = Post.create!(title: 'A Note About Butterflies', content: "Butterflies are pretty.", character: @proff_grizz, user: @table_master)
puts "#{Post.count} posts created!"

# COMMENT LIST
Comment.create!(content: "Where are you headed? I might be able to send some your way.", character: @bigby, user: @bigbys_fan29, post: @requesting_extra_rations)
Comment.create!(content: "I'd love to take a look when you have a chance!", character: @proff_grizz, user: @table_master, post: @expanding_spellbooks)
Comment.create!(content: "Aren't they? Wait until you see the monarchs!", character: @periwinkle_petorax, user: @serious36, post: @a_note_about_butterflies)
puts "#{Comment.count} comments created!"

puts "Database seeding complete!"
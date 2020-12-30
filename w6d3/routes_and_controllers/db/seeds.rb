# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.new(username: 'Chippy')
user2 = User.new(username: 'Potato')

artwork1 = Artwork.new(title: 'Rainbow', artist_id: 1, img_url: 'pretty.com')
artwork2 = Artwork.new(title: 'Foods', artist_id: 2, img_url: 'fatty.com')

artwork_share1 = ArtworkShare.new(artwork_id: 1, viewer_id: 2)
artwork_share2 = ArtworkShare.new(artwork_id: 2, viewer_id: 1)
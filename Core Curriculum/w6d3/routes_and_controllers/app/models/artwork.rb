# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artwork < ApplicationRecord

    validates :title, uniqueness: {scope: :artist_id}
    validates :title, :artist_id, :img_url, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    has_many :comments,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes, as: :likeable

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer
end

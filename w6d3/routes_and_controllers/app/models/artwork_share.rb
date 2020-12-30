class ArtworkShare < ApplicationRecord
    # validates :title, uniqueness: {scope: :artist_id}
    # validates :title, :artist_id, img_url, presence: true
end

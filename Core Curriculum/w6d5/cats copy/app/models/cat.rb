# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'
include ActionView::Helpers::DateHelper

class Cat < ApplicationRecord
  validates :color, presence: true
  validates :sex, presence: true

  def age
    time_ago_in_words(self.birth_date)
  end

  has_many :cat_rental_requests,
    primary_key: :id, 
    foreign_key: :cat_id,
    class_name: :CatRentalRequest,
    dependent: :destroy

end

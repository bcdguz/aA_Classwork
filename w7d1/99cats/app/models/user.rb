# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :session_token, :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minumum: 6 }, allow_nil: true

    attr_reader :password

    def reset_session_token!

    end

    def password=(password)
        @password = password

        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)

    end

    def self.find_by_credintials(username, password)

    end
end

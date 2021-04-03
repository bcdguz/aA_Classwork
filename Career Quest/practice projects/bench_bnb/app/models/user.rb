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
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    #spire

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if (!user)
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        Bcrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom.url_base64
        save!
        self.session_token
    end

    def ensure_session_token
        reset_session_token! if (!self.session_token)
    end
end

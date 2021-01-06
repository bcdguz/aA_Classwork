class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    attr_reader :password

    #SPIRE

    def self.find_by_credentials(username,password) 
        user = User.find_by(username: username)

        if user && user.is_password?(password)
            user
        else  
            nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end

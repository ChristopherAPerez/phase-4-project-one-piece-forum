class User < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :forums, through: :comments

    validates :username, presence: true, uniqueness: true
    validates :avatar_image, presence: true
end

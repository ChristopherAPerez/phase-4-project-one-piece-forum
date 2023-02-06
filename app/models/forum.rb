class Forum < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments

    validates :title, presence: true, uniqueness: true

end

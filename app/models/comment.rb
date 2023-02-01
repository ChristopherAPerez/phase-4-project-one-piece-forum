class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :forum

    validates :user_comment, presence: true
end

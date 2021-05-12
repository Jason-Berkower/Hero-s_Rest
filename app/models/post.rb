class Post < ApplicationRecord
  belongs_to :character
  belongs_to :user
  has_many :comments, dependent: :destroy
end

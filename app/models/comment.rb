class Comment < ApplicationRecord
  belongs_to :character
  belongs_to :post
end
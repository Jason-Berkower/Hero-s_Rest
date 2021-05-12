class User < ApplicationRecord
  has_one :character
  has_many :post
  has_many :comment
end

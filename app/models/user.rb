class User < ApplicationRecord
  has_one :character, dependent: :destroy
  has_many :post, dependent: :destroy
  has_many :comment, dependent: :destroy
end

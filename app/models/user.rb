class User < ApplicationRecord
  has_one :character, dependent: :delete_all
  has_many :post, dependent: :delete_all
  has_many :comment, dependent: :delete_all
end

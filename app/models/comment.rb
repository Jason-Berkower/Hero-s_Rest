class Comment < ApplicationRecord
  belongs_to :character, dependent :delete_all
  belongs_to :user
end

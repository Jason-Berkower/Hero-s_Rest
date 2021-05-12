class Character < ApplicationRecord
  belongs_to :user, dependent :delete_all
end

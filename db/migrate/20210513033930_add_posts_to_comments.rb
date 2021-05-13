class AddPostsToComments < ActiveRecord::Migration[6.1]
  def change
    add_column(:comments, :comment_id, :bigint, null: true)
    add_reference :posts, :comments, null: true, foreign_key: true
  end
end

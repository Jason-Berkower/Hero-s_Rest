class AddCommentsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column(:posts, :post_id, :bigint, null: true)
    add_reference :comments, :posts, null: true, foreign_key: true
  end
end

class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.string :class
      t.string :img_url

      t.timestamps
    end
  end
end

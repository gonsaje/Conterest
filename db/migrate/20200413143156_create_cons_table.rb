class CreateConsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :cons do |t|
      t.string :title, null: false
      t.string :description
      t.string :image_url, null: false
      t.integer :author_id, null: false
      t.integer :board_id
      t.timestamps
    end
    add_index :cons, :author_id
    add_index :cons, :board_id
  end
end

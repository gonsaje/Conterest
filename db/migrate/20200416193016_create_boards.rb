class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :string
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end

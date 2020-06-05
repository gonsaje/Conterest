class CreateBoardLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :board_links do |t|
      t.integer "board_id", null: false
      t.integer "con_id", null: false
      t.index :board_id
      t.index :con_id
      t.timestamps
    end
  end
end

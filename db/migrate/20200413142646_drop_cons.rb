class DropCons < ActiveRecord::Migration[5.2]
  def change
    drop_table :cons
  end
end

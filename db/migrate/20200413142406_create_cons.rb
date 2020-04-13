class CreateCons < ActiveRecord::Migration[5.2]
  def change
    create_table :cons do |t|
      t.string :title
    end
  end
end

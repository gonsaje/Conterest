class AddUsers < ActiveRecord::Migration[5.2]
  def change 
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :user_id
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :user_id
  end
end

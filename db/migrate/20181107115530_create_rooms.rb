class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :user_id
      t.string :title, null: false
      t.string :content, null: false
      t.timestamps
    end
  end
end

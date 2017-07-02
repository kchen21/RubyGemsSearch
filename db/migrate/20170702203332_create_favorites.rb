class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :name, null: false
      t.string :link

      t.timestamps null: false
    end

    add_index :favorites, :name, unique: true
  end
end

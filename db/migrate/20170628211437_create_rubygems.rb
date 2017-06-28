class CreateRubygems < ActiveRecord::Migration
  def change
    create_table :rubygems do |t|

      t.timestamps null: false
    end
  end
end

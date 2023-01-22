class CreateForums < ActiveRecord::Migration[6.1]
  def change
    create_table :forums do |t|
      t.string :title
      t.string :topic
      t.string :forum_image
      t.integer :views

      t.timestamps
    end
  end
end

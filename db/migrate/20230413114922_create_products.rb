class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|

      t.string :title
      t.text :description
      t.string :image url
      
      t.timestamps
    end
  end
end

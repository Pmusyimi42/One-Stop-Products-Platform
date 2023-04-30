class AddImageUrlToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :imageUrl, :string
  end
end

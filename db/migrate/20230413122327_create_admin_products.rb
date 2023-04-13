class CreateAdminProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :admin_products do |t|
      t.references :admin, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end

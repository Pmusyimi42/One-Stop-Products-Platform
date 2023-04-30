class CreatePermissions < ActiveRecord::Migration[6.1]
  def change
    create_table :permissions do |t|
      t.string :role
      t.boolean :access
      t.boolean :create
      t.boolean :edit
      t.boolean :view
      t.boolean :delete
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

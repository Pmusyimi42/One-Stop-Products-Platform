class CreateAdminUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :admin_users do |t|
      t.integer :admin_id 
      t.integer :user_id

      t.timestamps
    end
  end
end

class AddNameRoleAndEmailToAdminUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :admin_users, :name, :string
    add_column :admin_users, :role, :string
    add_column :admin_users, :email, :string
  end
end

class RemoveUserIdFromAdminUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :admin_users, :user_id
  end
end

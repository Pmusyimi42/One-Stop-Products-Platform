class RenameDeleteColumnInPermissions < ActiveRecord::Migration[6.1]
  def change
    rename_column :permissions, :delete, :remove

  end
end

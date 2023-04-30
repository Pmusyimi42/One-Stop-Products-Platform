class AdminUserSerializer < ActiveModel::Serializer
  attributes :id, :admin_id, :name, :role, :email, :password

  belongs_to :admin

end

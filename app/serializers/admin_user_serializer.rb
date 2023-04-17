class AdminUserSerializer < ActiveModel::Serializer
  attributes :id, :admin_id, :user_id

  belongs_to :admin
  belongs_to :user

end

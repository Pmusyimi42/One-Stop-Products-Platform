class PermissionSerializer < ActiveModel::Serializer
  attributes :id, :role, :access, :create, :edit, :view, :remove
  has_one :user
end

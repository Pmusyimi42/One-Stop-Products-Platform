class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart
end


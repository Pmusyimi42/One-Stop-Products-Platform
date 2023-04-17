class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :imageUrl

  
end

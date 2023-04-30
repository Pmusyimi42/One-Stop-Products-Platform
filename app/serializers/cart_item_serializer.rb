class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :quantity

end

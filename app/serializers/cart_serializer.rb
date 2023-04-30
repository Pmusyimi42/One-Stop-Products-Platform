class CartSerializer < ActiveModel::Serializer
  attributes :id, :cart_items

 def cart_items
  self.cart_items
 end
#   has_many :products
end

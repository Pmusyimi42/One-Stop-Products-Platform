class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product

  # validates :order_id, presence: true, uniqueness: { scope: :product_id }
  validates :product_id, presence: true, uniqueness: { scope: :order_id }
  validates :quantity, presence: true, numericality: { greater_than_or_equal_to: 1 }
end

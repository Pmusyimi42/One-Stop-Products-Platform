class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items, dependent: :destroy
  has_one :payment, dependent: :destroy
  has_many :products, through: :order_items
  
  validates :user_id, presence: true

end

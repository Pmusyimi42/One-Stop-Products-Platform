class AdminProduct < ApplicationRecord
  belongs_to :admin
  belongs_to :product

  validates :admin_id, presence: true, uniqueness: { scope: :product_id }
  validates :product_id, presence: true, uniqueness: { scope: :admin_id }
end

class Payment < ApplicationRecord
  belongs_to :order

  validates :order_id, presence: true

  validates :order_id, uniqueness: true


  validates :amount, numericality: { greater_than: 0 }

  validates :status, inclusion: { in: %w(pending successful failed), message: "%{value} is not a valid status" }



end

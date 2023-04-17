class PaymentSerializer < ActiveModel::Serializer
  attributes :status, :amount

  belongs_to :order
end

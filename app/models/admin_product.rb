class AdminProduct < ApplicationRecord
  belongs_to :admin
  belongs_to :product
end

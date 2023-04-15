class User < ApplicationRecord
  has_many :carts, dependent: :destroy
  has_many :orders, dependent: :destroy
  has_many :admin_users, dependent: :destroy
  has_many :admins, through: :admin_users
end

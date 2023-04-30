class User < ApplicationRecord
  has_secure_password
  
  # has_many :carts, dependent: :destroy
  # has_many :orders, dependent: :destroy
  # has_many :admin_users, dependent: :destroy
  # has_many :admins, through: :admin_users
  has_one :cart

  validates :name, presence: true,length: { maximum: 255 },  uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

end

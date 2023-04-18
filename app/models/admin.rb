class Admin < ApplicationRecord
    has_many :admin_products, dependent: :destroy
    has_many :products, through: :admin_products
    has_many :admin_users, dependent: :destroy
    has_many :users, through: :admin_users

    has_secure_password
    validates :email, presence: true
    # validates :password, presence: true
end


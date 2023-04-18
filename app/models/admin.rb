class Admin < ApplicationRecord
    has_many :admin_products, dependent: :destroy
    has_many :products, through: :admin_products
    has_many :admin_users, dependent: :destroy
    has_many :users, through: :admin_users

    has_secure_password

    validates :password_digest, presence: true,  uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }


end


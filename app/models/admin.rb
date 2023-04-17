class Admin < ApplicationRecord
    has_secure_password
    
    has_many :admin_products, dependent: :destroy
    has_many :products, through: :admin_products
    has_many :admin_users, dependent: :destroy
    has_many :users, through: :admin_users

    

    validates :password_digest, presence: true,  uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }


end


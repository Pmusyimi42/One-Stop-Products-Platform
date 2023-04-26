class AdminUser < ApplicationRecord
    belongs_to :admin
    has_secure_password


    # validates :admin_id, presence: true
    # validates :user_id, presence: true


end

class AdminUser < ApplicationRecord
    belongs_to :admin
    belongs_to :user


    validates :admin_id, presence: true
    validates :user_id, presence: true


end

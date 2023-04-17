class AdminUsersController < ApplicationController
    def index
        render json: AdminUser.all
      end
  
      def show
        admin_user = find_admin_user
        render json: admin_user, status: :ok
      end
  
      def create
        admin_user = AdminUser.create!(admin_user_params)
        render json: admin_user, status: :created
      end
  
      def update
        admin_user = find_admin_user
        admin_user.update!(admin_user_params)
        render json: admin_user, except: [:created_at, :updated_at], status: :created
      end
  
      def destroy
        admin_user = find_admin_user
        admin_user.destroy
        head :no_content
      end
  
      private
  
      def find_admin_user
        AdminUser.find(params[:id])
      end
  
      def admin_user_params
        params.permit(:id, :admin_id, :user_id)
     end
end


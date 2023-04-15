class AdminUsersController < ApplicationController
    def index
        render json: AdminUser.all
      end
  
      def show
        admin-user = find_admin-user
        render json: admin-user, status: :ok
      end
  
      def create
        admin-user = AdminUser.create!(admin-user_params)
        render json: admin-user, status: :created
      end
  
      def update
        admin-user = find_admin-user
        admin-user.update!(admin-user_params)
        render json: admin-user, except: [:created_at, :updated_at], status: :created
      end
  
      def destroy
        admin-user = find_admin-user
        admin-user.destroy
        head :no_content
      end
  
      private
  
      def find_admin-user
        AdminUser.find(params[:id])
      end
  
      def admin-user_params
        params.permit(:id, :applicant_id, :course_id, :documents, :status)
     end
end

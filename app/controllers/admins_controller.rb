class AdminsController < ApplicationController
    def index
        render json: Admin.all
      end
  
      def show
        admin = find_admins
        render json: admin, status: :ok
      end
  
      def create
        admin = Admin.create!(admin_params)
        render json: admin, status: :created
      end
  
      def update
        admin = find_admins
        admin.update!(admin_params)
        render json: admin, except: [:created_at, :updated_at], status: :created
      end
  
      def destroy
        admin = find_admins
        admin.destroy
        head :no_content
      end
  
      private
  
      def find_admins
        Admin.find(params[:id])
      end
  
      def admin_params
        params.permit(:id, :applicant_id, :course_id, :documents, :status)
     end
end

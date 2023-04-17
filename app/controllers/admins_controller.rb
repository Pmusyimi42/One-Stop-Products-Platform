class AdminsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  
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
        params.permit(:id, :email, :password_digest)
     end

     def render_not_found_response
      render json: { error: "Bird not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end

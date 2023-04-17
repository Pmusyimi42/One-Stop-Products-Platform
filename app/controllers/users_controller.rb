class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
      end
  
      def show
        user = find_users
        render json: user, status: :ok
      end
  
      def create
        user = User.create!(user_params)
        render json: user, status: :created
      end
  
      def update
        user = find_users
        user.update!(user_params)
        render json: user, except: [:created_at, :updated_at], status: :created
      end
  
      def destroy
        user = find_users
        user.destroy
        head :no_content
      end
  
      private
  
      def find_users
        User.find(params[:id])
      end
  
      def user_params
        params.permit(:id, :name, :email, :password_digest)
     end

     def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
  
     
end

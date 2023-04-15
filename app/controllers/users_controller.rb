class UsersController < ApplicationController

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
        params.permit(:id, :applicant_id, :course_id, :documents, :status)
     end
  
     
end

class SessionsController < ApplicationController
  #def new
  #end

  #def create
  #end

  #def destroy
  #end
  def login 
    @user = User.find_by(email: login_params[:email])
    
    if @user&.authenticate(login_params[:password])
      token = encode_token({ email: @user.email })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { error: "Invalid email or password"}, status: :not_found
    end
  end

  def destroy
    @current_user = nil
   session.delete(:jwt_token)
   render json: { message: 'Logged out successfully' }
 end

  private

  def login_params
    params.permit(:email, :password)
  end
end

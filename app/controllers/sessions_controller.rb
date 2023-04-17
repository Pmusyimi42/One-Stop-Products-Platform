class SessionsController < ApplicationController
  #def new
  #end

  #def create
  #end

  #def destroy
  #end

  private

  def login_params
    params.permit(:name, :email, :password)
  end
end

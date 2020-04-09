class Api::SessionsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :ensure_logged_out, only: [:create]

  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ["Imposter! Try Again!"], status: 401
    else
      login!(@user)
    end
  end

  def destroy
    if current_user.nil?
      render json: ["Can't Do This Right Now"], status: 404

    else  
      logout!
      render json: ['Logged Out!']
    end
  end
end
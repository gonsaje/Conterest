class Api::SessionsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :ensure_logged_out, only: [:create]

  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: {message: 'Imposter...Wrong Credentials!!'}, status: 401
    else
      login!(@user)
      render json: {message: "i rendered"}
    end
  end

  def destroy
    if current_user.nil?
      render json: {message: "couldn't logout!"}, status: 404

    else  
      logout!
      render json: { message: 'Logged Out!' }
    end
  end
end
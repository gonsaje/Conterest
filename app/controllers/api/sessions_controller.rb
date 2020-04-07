class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Imposter...Wrong Credentials!!'], status: 401
    else
      login!(@user)
      render 'api/users/show';
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
class Api::UsersController < ApplicationController
  #fix renders after routes
  def create 
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render json: {message: "successfully signed up"}
    else
      render json: @user.error.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :age)
  end
end
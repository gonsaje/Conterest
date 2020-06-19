class Api::UsersController < ApplicationController
  #fix renders after routes

  def create 

    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render '/api/users/show'
    else
      render json: ['Invalid Inputs! Try Again!'], status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :age)
  end
end
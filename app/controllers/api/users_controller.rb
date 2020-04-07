class UsersController < ApplicaionController
  #fix renders after routes
  def create 
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      redirect_to "api/users/show"
    else
      flash.now[:errors] = @user.error.full_messages
      render '/signup'
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
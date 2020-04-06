class UsersController < ApplicaionController
  #fix renders after routes
  def new 
    render :new 
  end

  def create 
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = @user.error.full_messages
      render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
class Api::ConsController < ApplicationController

  def create
    @con = Con.new(cons_params)
    @con.author_id = current_user.id
    if @con.save
      render '/api/cons/show'
    else
      render json: ['Missing Inputs! Try Again!'], status: 401
    end

  end

  def show

    @con = Con.find(params[:id])
    render '/api/cons/show'
  end

  def index
    @cons = Con.all
    render 'api/cons/index'
  end

  def edit 
    @con = Con.find(params[:id])
    if @con.authtor_id == current_user.id
      render :edit
    else
      render 'api/cons/show'
    end
  end

  def destroy
    con = current_user.cons.find_by(id: params[:id])
    con.destroy
    render 'api/cons/index'
  end


  private

  def cons_params
    params.require(:con).permit(:title)
  end
end
class Api::ConsController < ApplicationController

  def create
    @con = Con.new(cons_params)
    if @con.save
      render '/api/cons/show'
    else
      render json: ['Invalid Inputs! Try Again!'], status: 401
    end
  end

  def show
    @con = Con.find(params[:id])
    render '/api/cons/show'
  end

  def index
    @cons = Con.all
  end


  private

  def cons_params
    params.require(:con).permit(:title, :image_url)
  end
end
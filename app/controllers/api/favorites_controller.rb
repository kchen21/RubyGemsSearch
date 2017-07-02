class Api::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @favorites = Favorite.all
    render :index
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      @favorites = Favorite.all
      render :index
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(name: favorite_params[:name])

    if @favorite
      @favorite.destroy
      @favorites = Favorite.all
      render :index
    else
      render json: ["Favorite not found"], status: 404
    end
  end

  private

  def favorite_params
    params.require(:favorites).permit(:name, :link)
  end
end

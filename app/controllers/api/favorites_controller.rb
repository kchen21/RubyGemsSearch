class Api::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @favorites = Favorites.all
    render :index
  end

  def create
  end

  def destroy
  end
end

class Api::RubygemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def search
    @gems = Gems.search(params[:keyword])
    @favorites = get_favorites
    render :search
  end

  private

  def get_favorites
    favorites = Favorite.all
    namesToFavorites = {};

    favorites.each do |favorite|
      namesToFavorites[favorite.name] = favorite
    end

    namesToFavorites
  end
end

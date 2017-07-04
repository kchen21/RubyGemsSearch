class Api::RubygemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def search
    @gems = Gems.search(params[:keyword])
    @favorites = get_names_of_favorites
    render :search
  end

  private

  def get_names_of_favorites
    favorites = Favorite.all
    names = [];

    favorites.each do |favorite|
      names.push(favorite.name)
    end

    names
  end
end

class Api::RubygemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def search
    @gems = Gems.search(params[:keyword])
    render :search
  end
end

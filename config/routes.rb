Rails.application.routes.draw do
  root to: "static_pages#root"
  get '/favorites' => "static_pages#favorites"

  namespace :api, defaults: {format: :json} do
    resources :rubygems do
      collection do
        get 'search'
      end
    end

    resources :favorites, only: [:index, :create, :destroy]
  end

end

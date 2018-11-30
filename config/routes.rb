Rails.application.routes.draw do

  devise_for :users
  root 'pages#index'
  get 'pages/show'
  post 'comments/new' => 'comments#create'

  resources :rooms

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :rooms
      resources :comments
    end
  end

end

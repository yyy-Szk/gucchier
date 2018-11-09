Rails.application.routes.draw do

  devise_for :users
  root 'pages#index'
  get 'pages/show'
  post 'comments/new' => 'comments#create'

  resources :rooms

end

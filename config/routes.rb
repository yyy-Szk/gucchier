Rails.application.routes.draw do

  devise_for :users
  root 'pages#index'
  get 'pages/show'
  get 'timelines/index'
  get 'timelines/show'
  post 'room/new'
  post 'comment/new'

  resources :timelines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

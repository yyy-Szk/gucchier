Rails.application.routes.draw do
  get 'timelines/index'
  get 'timelines/show'
  devise_for :users
  root 'pages#index'
  get 'pages/show'

  resources :timelines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end



  

Rails.application.routes.draw do

  resources :permissions
  #get 'sessions/new'
  #get 'sessions/create'
  #get 'sessions/destroy'

  post '/login', to: 'sessions#login'
  post '/signup', to: 'users#signup'
  get '/me', to: 'users#me'
  resources :orders
  resources :cart_items
  resources :carts
  resources :admin_users
  resources :order_items
  resources :product_categories
  resources :products
  resources :admin_products
  resources :payments
  resources :categories
  resources :admins
  resources :users
  resources :permissions

  # namespace :api do
  #   namespace :v1 do
  #     resources :admins, only: [:create]
      # post '/login', to: 'auth#create'
      get '/profile', to: 'admins#profile'
  #   end
  # end



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :admin_users
  resources :admins
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

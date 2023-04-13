Rails.application.routes.draw do

  resources :orders
  resources :admin_users


  resources :order_items


  resources :product_categories
  resources :products


  resources :admin_products
  resources :payments
  resources :categories


  resources :admins
  resources :users



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

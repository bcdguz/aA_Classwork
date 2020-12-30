Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:index, :show, :create, :update, :destroy]
  # get 'users/:id', to: 'users#show', as: 'user'
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show', as: 'user'
  # post 'users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'
  # put '/users/:id', to: 'users#update'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'

  resources :artworks, only:[:create, :destroy]
end

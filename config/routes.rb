Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  ################# Routes #####################

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :users, only: [:create, :update]
  get "/me", to: "users#show"

  resources :forums, except: [:update, :destroy]

  resources :comments, path: "forum_page/comments"
  patch "/likes/:id", to: "comments#likes"

  ################# Routes #####################


end

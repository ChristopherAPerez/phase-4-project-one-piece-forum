Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  ################# Routes #####################

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # get "/users", to: "users#index"
  # post "/signup", to: "users#create"
  # patch "update_profile", to: "users#update"
  resources :users, only: [:create, :update]
  get "/me", to: "users#show"


  # get "/forums", to: "forums#index"
  # post "/create_forum", to: "forums#create"
  # get "/forum_page/:id", to: "forums#show"

  resources :forums, except: [:update, :destroy]


  # post "/create_comment", to: "comments#create"

  # post "forum_page/create_comment", to: "comments#create"
  # get "/comments/:id", to: "comments#show"
  # patch "/update_comment/:id", to: "comments#update"
  # patch "/forum_page/update_comment/:id", to: "comments#update"
  # patch "/update_likes/:id", to: "comments#updateLikes"
  # patch "forum_page/update_likes/:id", to: "comments#updateLikes"
  # delete "/delete_comment/:id", to: "comments#destroy"
  # delete "/forum_page/delete_comment/:id", to: "comments#destroy"

  resources :comments, path: "forum_page/comments"
  patch "/likes/:id", to: "comments#likes"

  ################# Routes #####################


end

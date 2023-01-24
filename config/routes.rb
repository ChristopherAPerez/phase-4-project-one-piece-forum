Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  ################# Routes #####################

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "update_profile", to: "users#update"

  get "/forums", to: "forums#index"
  post "/create_forum", to: "forums#create"
  get "/forum_page/:id", to: "forums#show"

  get "/comments", to: "comments#index"
  get "/forum_comments/:id", to: "comments#show"
  patch "/update_comment/:id", to: "comments#update"
  delete "/delete_comment/:id", to: "comments#destroy"

  ################# Routes #####################


end

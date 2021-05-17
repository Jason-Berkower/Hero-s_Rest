Rails.application.routes.draw do
# Routes for Users
get "/users/", to: 'users#index', as: 'users'
get "/users/:id", to: 'users#show'
post "/users/", to: 'users#create'
put "/users/:id", to: 'users#update'
delete "/users/:id", to: 'users#destroy'
post "/signin", to: 'users#signin'

# Routes for Characters
get "/users/characters/", to: 'characters#index', as: 'characters'
get "/users/:user_id/characters/", to: 'characters#index'
post "/users/:user_id/characters/", to: 'characters#create'
put "/users/:id/characters/:id", to: 'characters#update'
delete "/users/:id/characters/:id", to: 'characters#destroy'

# Routes for Posts
get "/all_posts/", to: 'posts#all_posts', as: 'posts'
get "/users/:id/characters/:id/posts/:id", to: 'posts#show'
post "/users/:user_id/characters/:character_id/posts/", to: 'posts#create'
put "/users/:id/characters/:id/posts/:id", to: 'posts#update'
delete "/users/:id/characters/:id/posts/:id", to: 'posts#delete'

# Routes for Comments
get "/users/:id/characters/:id/posts/:id/comments/", to: 'comments#index', as: 'comments'
get "/users/:id/characters/:id/posts/:id/comments/:id", to: 'comments#show'
post "/users/:id/characters/:id/posts/:id/comments/", to: 'comments#create'
put "/users/:id/characters/:id/posts/:id/comments/:id", to: 'comments#update'
delete "/users/:id/characters/:id/posts/:id/comments/:id", to: 'comments#delete'

  resources :users do
    resources :characters do
      resources :posts
      resources :comments
    end
  end
end



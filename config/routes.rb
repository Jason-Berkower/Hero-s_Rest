Rails.application.routes.draw do
# Route for Characters
get '/users/characters/', to: 'characters#index', as: 'characters'
# Route for Posts
get '/users/characters/posts/', to: 'posts#index', as: 'posts'
# Route for Comments
get 'users/characters/comments/', to: 'comments#index', as: 'comments'

  resources :users do
    resources :characters do
      resources :posts
      resources :comments
    end
  end
end



Rails.application.routes.draw do
  resources :users do
    resources :characters do
      resources :posts
      resources :comments
    end
  end
end

# Route for Users
get "/users", to: "users#all_users"
# Route for Characters
get "/characters", to: "characters#all_characters"
# Route for Posts
get "/posts", to: "posts#all_posts"
# Route for Comments
get "/comments", to: "comments#all_comments"
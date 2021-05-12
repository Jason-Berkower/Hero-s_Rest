Rails.application.routes.draw do
  resources :users do
    resources :characters do
      resources :posts
      resources :comments
    end
  end
end

# Route for Users

# Route for Characters

# Route for Posts

# Route for Comments
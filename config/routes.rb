Rails.application.routes.draw do
  resources :users do
    resoures :characters do
      resources :posts
      resources :comments
    end
  end
end

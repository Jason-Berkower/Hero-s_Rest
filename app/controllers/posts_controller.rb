class PostsController < ApplicationController
  def index
    @posts: Post.all
    render json: @posts
  end

  def show

  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def post_params
    
  end
end

class PostsController < ApplicationController
  before_action :set_post, only:[:show, :update, :delete]
  def index
    @character = Character.find(params[:character_id])
    @posts = Post.where(character_id: @character.id)
    render json: @posts, include: :character, status: :ok
  end

  def show
    render json: @post, include: :character, status: :ok
  end

  def create
    @user = User.find(params[:user_id])
    @character = Character.find(params[:character_id])
    @post = Post.create(post_params)
    @post.user = @user
    @post.character = @character
    if @post.save!
      render json: @post
    else
      render json: @post.errors
    end
  end

  def update
    p params
    @post.update(post_params)
    render json: @post
  end

  def delete
    @post.destroy
    render json: {message: "#{@post.title} has been deleted."}
  end

  def all_posts
    @posts = Post.all
    render json: @posts, include: :character, status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :character_id, :user_id)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end
end

class PostsController < ApplicationController
  def index
    @character = Character.find(params[:character_id])
    @posts = Post.where(character_id: @character.id)
    render json: @posts, include: :character, status: :ok
  end

  def show
    render json: @post, include: :character, status: :ok
  end

  def create
    @post = Post.create!(post_params)
    render json: @post
  end

  def update
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post.destroy
    render json: message{"#{@post.title} has been deleted."}
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :character_id)
  end

  def set_post
    @post: Post.find(params[:id])
  end
end

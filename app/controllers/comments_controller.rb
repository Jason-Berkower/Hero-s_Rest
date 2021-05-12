class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :create, :destroy]
  def index
    @character: Character.find(params[:character_id])
    @comments: Comments.where(character_id: @character.id)
    render json: @comments, include: :character, status: :ok
  end

  def show
    render json: @comment, includes: :character, status: :ok
  end

  def create
    @comment = Comment.create!(comment_params)
    render json: @comment
  end

  def update
    @comment.update(comment_params)
    render json: @comment
  end

  def destroy
    @comment.destroy
    render json: message{"Comment has been deleted."}
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :character_id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
end

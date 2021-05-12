class CommentsController < ApplicationController
  def index
    @comments: Comment.all
    render json: @comments
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

  def comment_params
    
  end
end

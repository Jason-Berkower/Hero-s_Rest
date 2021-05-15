class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user, include: :character, status: :ok
  end

  def create
    @user = User.create!(user_params)
    render json: @user
  end

  def update
    @user.update(user_params)
    if @user.save!
      render json: @user
    else
      render json: @user.errors
    end
  end

  def destroy
    @user.destroy
    render json: {message: "#{@user.username} has been deleted!"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end

  def set_user
    @user = User.find(params[:id])
  end
end

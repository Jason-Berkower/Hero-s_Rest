class UsersController < ApplicationController
  before_action :set_user, only: [:show, :create, :update, :destroy]
  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user, include: :characters, status: :ok
  end

  def create
    @user = User.create!(user_params)
    render json: @user
  end

  def update
    @user = User.update(user_params)
    render json: @dojo
  end

  def destroy
    @user.destroy
    render json: message{"#{@user.username} has been deleted!"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end

  def set_user
    @user = User.find(params[:id])
  end
end

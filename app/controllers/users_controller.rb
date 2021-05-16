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

  def signin
    @users = User.where(username: user_params[:username])
    if @users.length > 0
      if @users[0].password_digest == params[:password_digest]
        render json: @users[0]
      else
        render json: {message: "What are you doing?"}
      end
    else
      render json: {message: "User not found!"}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end

  def set_user
    @user = User.find(params[:id])
  end
end

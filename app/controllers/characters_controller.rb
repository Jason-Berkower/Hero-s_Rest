class CharactersController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @characters = Character.where(user_id: @user.id)
    render json: @characters, include: :user, status: :ok
  end

  def show
    render json: @character, include: :user, status: :ok
  end

  def create
    @user = User.find(params[:user_id])
    @character = Character.create(character_params)
    @character.user = @user
    @character.save!
    render json: @character
  end

  def update
    @character.update(character_params)
    render json: @character
  end

  def destroy
    @character.destroy
    render json: message{"#{@character.name} has been deleted!"}
  end

  private

  def character_params
    params.require(:character).permit(:name, :race, :character_class, :img_url, :user_id)
  end

  def set_character
    @character = Character.find(params[:id])
  end
end

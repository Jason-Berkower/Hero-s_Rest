class CharactersController < ApplicationController
  def index
    @characters: Character.all
    render json: @characters
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

  def character_params
    
  end
end

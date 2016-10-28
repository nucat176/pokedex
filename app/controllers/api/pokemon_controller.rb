class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save!
      render :create
    else
    end
  end

  private

  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end

class Api::V1::TweetsController < ApplicationController
  def index
    @rooms = Room.all
    render json: @rooms
  end
end

class RoomsController < ApplicationController
before_action :check_sign_in, only: [:show, :index]

  def create
    @room = Room.new(room_params)
    if @room.save
      @comment = Comment.create(content: room_params[:content], user_id: room_params[:user_id], room_id: @room.id)
      redirect_to room_path(id: @room.id)
    else
      @rooms = Room.all
      render "/rooms/index"
    end
  end

  def index
    @rooms = Room.all
    @room = Room.new
  end

  def show
    @room = Room.find(params[:id])
    @comments = Comment.where(room_id: params[:id])
    @comment = Comment.new
  end

  private
    def room_params
      params.require(:room).permit(:title, :content, :user_id)
    end

    def check_sign_in
      if !signed_in?
        redirect_to new_user_session_path
      end
    end


end

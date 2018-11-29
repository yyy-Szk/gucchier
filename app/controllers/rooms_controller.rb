class RoomsController < ApplicationController
before_action :check_sign_in, only: [:show, :index]
protect_from_forgery except: :create

  def create
    @room = Room.new(room_params)
    @room.user_id = current_user.id
    if @room.save
      # redirect_to rooms_url
      # render  '/room/index'
    # @room = Room.new(room_params)
    # if @room.save
      @comment = Comment.create(content: room_params[:content], user_id: current_user.id, room_id: @room.id)
    #   redirect_to rooms_url
    # else
    #   @rooms = Room.all
    #   render "/rooms/index"
    end
  end

  def index
  end

  def show
    @room = Room.find(params[:id])
    @comments = Comment.where(room_id: params[:id])
    @comment = Comment.new
  end

  private
    def room_params
      params.require(:room).permit(:title, :content)
    end

    def check_sign_in
      if !signed_in?
        redirect_to new_user_session_path
      end
    end


end

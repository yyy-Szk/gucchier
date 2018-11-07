class TimelinesController < ApplicationController
  def index
    @rooms = Room.all
    @room = Room.new
  end

  def show
    @comments = Comment.all
    @comment = Comment.new
  end
end

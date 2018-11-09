class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to room_path(id: @comment.room_id)
    else
      @room = Room.find(params[:id])
      @comments = Comment.where(id: params[:id])
      render "/rooms/show"
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :user_id, :room_id)
    end

end

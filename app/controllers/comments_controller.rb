class CommentsController < ApplicationController
  protect_from_forgery except: :create

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
    #   redirect_to room_url(id: @comment.room_id)
    # else
    #   @room = Room.find(params[:id])
    #   @comments = Comment.where(id: params[:id])
    #   render "/rooms/show"
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :room_id)
    end

end

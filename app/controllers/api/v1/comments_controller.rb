class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Comment.where(room_id: params[:id])
    render json: @comments
  end
end

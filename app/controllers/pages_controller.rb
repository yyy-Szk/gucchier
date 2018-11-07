class PagesController < ApplicationController
  before_action :sign_in_required, only: [:show]

  def index
    render layout: 'default.html.erb'
  end

  def show
  end

end

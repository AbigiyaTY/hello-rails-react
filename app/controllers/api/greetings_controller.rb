class Api::GreetingsController < ApplicationController
  def index
    messages = Greeting.all.shuffle
    render json: messages
  end
end

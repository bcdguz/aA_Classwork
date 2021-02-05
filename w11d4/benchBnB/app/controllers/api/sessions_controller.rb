class Api::SessionsController < ApplicationController

    def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

    def destroy
        if logout!
            render {}
        else
            render json:["No current user"], status: 404
        end
    end
end

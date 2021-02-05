class Api::UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            flash.now[:errors] = @user.errors 
            render :new
        end
    end
end

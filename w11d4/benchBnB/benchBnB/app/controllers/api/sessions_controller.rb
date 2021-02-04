class Api::SessionsController < ApplicationController
    def new
        @user = User.new
    end

    def create
        @user = User.find_by_credentials(user_params)
        if @user
            login!(@user)
            redirect_to root_url
        else  
            @user = User.new
            flash.now[:errors] = { base:["Invalid username or password"] }
            render :new
        end
    end

    def destroy
        if logout!
            render {}
        else
            
        redirect_to new_session_url
    end
end

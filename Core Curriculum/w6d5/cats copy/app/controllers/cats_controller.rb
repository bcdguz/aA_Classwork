class CatsController < ApplicationController

    def index
        @cats = Cat.all
        render :index
    end

    def show
        @cats = Cat.find(params[:id])
        render :show
    end

    def create
        @cats = Cat.new(cat_params)

        if @cats.save
            redirect_to cat_url(@cats)
        else
            render :new
        end
    end

    def edit
        @cat = Cat.find(params[:id])
        render :edit
    end

    def update 
    end

    def new
        @cat = Cat.new
        render :new
    end

    private

    def cat_params
        params.require(:cat).permit(:birth_date, :name, :sex, :color, :description)
    end

end

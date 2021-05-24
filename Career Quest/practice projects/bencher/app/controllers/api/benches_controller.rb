class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.in_bounds(bounds)

        if params[:minSeating] && params[:maxSeating]
            @benches = @benches.where(seating: seating_range)
        end

        render :index
    end

    def create
        @bench = Bench.create!(bench_params)
        render :show
    end

    private
    def seating_range
        (params[:minSeating]..params[:maxSeating])
    end

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating)
    end

    def bounds
        params[:bounds]
    end
end

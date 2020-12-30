class ArtworkSharesController < ApplicationController

    def create
        artworkshare = ArtworkShare.new(artwork_params)
        # replace the `artwork_attributes_here` with the actual attribute keys
        if artworkshare.save
            render json: artwork
          else
            render json: artworkshare.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        artworkshare = Artwork.find(params[:id])
        artworkshare.destroy
        render json: artworkshare
      end


end

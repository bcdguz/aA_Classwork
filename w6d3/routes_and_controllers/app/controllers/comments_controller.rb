class CommentsController < ApplicationController
    def index
        #artwork_own = Artwork.where(artist_id: params[:user_id])
        if params[:user_id]
            comments = Comment.where(user_id: params[:user_id])
        elsif params[:artwork_id]
            comments = Comment.where(artwork_id: params[:artwork_id])
        end

        render json: comments
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :artwork_id)
    end
end

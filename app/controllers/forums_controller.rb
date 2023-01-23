class ForumsController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            forums = Forum.all
            render json: forums, include: :comments
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    # def create
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         new_album = Album.create(album_params)
    #         if new_album.valid?
    #             render json: album, status: :created
    #         else
    #             render json: { errors: ["errors"] }, status: :unprocessable_entity
    #         end
    #     else
    #         render json: { errors: ["Not authorized"] }, status: :unauthorized
    #     end
    # end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         albums = Forum.where(id: user.id)
    #         render json: albums, include: :songs
    #     else
    #         render json: { errors: ["Not authorized"] }, status: :unauthorized
    #     end
    # end

    private 

    def forum_params
        params.permit(:title, :topic, :forum_image, :views)
    end
end

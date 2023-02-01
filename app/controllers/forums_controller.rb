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

    def create
        user = User.find_by(id: session[:user_id])
        if user
            forum = Forum.create(forum_params)
            if forum.valid?
                render json: forum, status: :created
            else
                render json: { errors: ["errors"] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            forum = Forum.find_by(id: params[:id])
            if forum
                render json: forum, include: :comments
            else
                render json: { errors: ["Not found"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            forum = Forum.find_by(id: params[:id])
            if forum
                forum.update(forum_params)
                render json: forum, status: :accepted
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private 

    def forum_params
        params.permit(:title, :topic, :detail, :forum_image)
    end
end

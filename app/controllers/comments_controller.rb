class CommentsController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            comments = Comment.all
            render json: comments
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            comment = Comment.create(comment_params)
            if comment
                render json: comment, status: :created
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
            comments = Comment.where(forum_id: params[:id])
            render json: comments
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end


    def update
        user = User.find_by(id: session[:user_id])
        if user
            comment = Comment.find_by(id: params[:id])
            if comment.user_id == user.id
                comment.update(comment_params)
                render json: comment, status: :accepted
            else
                render json: {error: "not your comment"}, status: :unauthorized
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            comment = Comment.find_by(id: params[:id])
            if comment.user_id == user.id
                comment.destroy
                head :no_content
            else
                render json: {error: "not your comment"}, status: :unauthorized
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private 

    def comment_params
        params.permit(:user_comment, :likes, :user_id, :forum_id)
    end

end

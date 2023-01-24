class CommentsController < ApplicationController

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
            comment.update(comment_params)
            if comment.valid?
                render json: comment, status: :accepted
            else
                render json: { errors: ["Errors"] }, status: :unprocessable_entity
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

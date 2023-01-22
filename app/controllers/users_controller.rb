class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            users = User.all
            render json: users
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Unprocessable Entity"] }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: [:forums, :comments]
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(user_params)
            if user.valid?
                render json: user, status: :accepted
            else
                render json: { errors: ["Errors"] }, status: :unprocessable_entity
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar_image, :bio)
    end

end


class OrdersController < ApplicationController
    def index
        render json: Order.includes(:user, :payment).all, include: [:user, :payment]
    end

    def show
        render json: Order.find(params[:id])
    end

    def create
        order = Order.create(order_params)
        render json: order
    end

    def destroy
        Order.destroy(params[:id])
        head :no_content
    end

    private

    def order_params
        params.permit(:user_id)
    end
end

class OrderItemsController < ApplicationController
    before_action :set_order_item, only: [:show, :update, :destroy]


    def index
        render json: OrderItem.all
    end

    def show
        # @order_item = OrderItem.find(params[:id])
        render json: @order_item
    end

    def create
        @order_item = OrderItem.new(order_item_params)
        if @order_item.save
            render json: @order_item, status: :created, location: @order_item
        else
            render json: @order_item.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        if @order_item.update(order_item_params)
          render json: @order_item
        else
          render json: @order_item.errors, status: :unprocessable_entity
        end
      end

    def destroy
        @order_item.destroy
        head :no_content
    end


    private

    def set_order_item
        @order_item = OrderItem.find(params[:id])
    end

    def order_item_params
        params.permit(:order_id, :product_id, :quantity)
    end
end

class OrderItemsController < ApplicationController
    before_action :set_order_item, only: [:index, :show, :create, :destroy]

    # GET /order_items
    def index
        @order_items = OrderItem.all
        render json: @order_items
    end

    # GET /order_items/:id
    def show
        render json: @order_item
    end

    # POST /order_items
    def create
        @order_item = OrderItem.new(order_item_params)
        if @order_item.save
            render json: @order_item, status: :created, location: @order_item
        else
            render json: @order_item.errors.full_messages, status: :unprocessable_entity
        end
    end

    # DELETE /order_items/:id
    def destroy
        @order_item.destroy
    end


    private

    def set_order_item
        @order_item = OrderItem.find(params[:id])
    end

    def order_item_params
        params.require(:order_item).permit(:product_id, :quantity)
    end
end

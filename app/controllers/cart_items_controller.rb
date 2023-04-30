class CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]

  # GET /cart_items
  def index
    @cart_items = CartItem.all

    render json: @cart_items
  end

  # GET /cart_items/1
  def show
    render json: @cart_item
  end

  # POST /cart_items
  def create
    @cart_item = CartItem.find_by(product_id: cart_item_params[:product_id])
    if @cart_item 
      @cart_item.quantity = @cart_item.quantity + cart_item_params[:quantity]
      @cart_item.save
    else
      @cart_item = CartItem.create!({
        cart_id: User.find(cart_item_params[:user_id]).cart.id,
        product_id: cart_item_params[:product_id],
        quantity: cart_item_params[:quantity]
      })
    end

   render json: @cart_item
    # if @cart_item.save
    #   render json: @cart_item, status: :created, location: @cart_item
    # else
    #   render json: @cart_item.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /cart_items/1
  def update
    if @cart_item.update(cart_item_params)
      render json: @cart_item
    else
      render json: @cart_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cart_items/1
  def destroy
    @cart_item.destroy
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart_item
      @cart_item = CartItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cart_item_params
      params.permit(:user_id, :product_id, :quantity)
    end
end

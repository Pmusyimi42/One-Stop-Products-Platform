class AdminProductsController < ApplicationController
  before_action :set_admin_product, only: [:show, :update, :destroy]

  # GET /admin_products
  def index
    @admin_products = AdminProduct.all

    render json: @admin_products
  end

  # GET /admin_products/1
  def show
    render json: @admin_product
  end

  # POST /admin_products
  def create
    @admin_product = AdminProduct.new(admin_product_params)

    if @admin_product.save
      render json: @admin_product, status: :created, location: @admin_product
    else
      render json: @admin_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin_products/1
  def update
    if @admin_product.update(admin_product_params)
      render json: @admin_product
    else
      render json: @admin_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin_products/1
  def destroy
    @admin_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_product
      @admin_product = AdminProduct.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_product_params
      params.require(:admin_product).permit(:admin_id, :product_id)
    end
end

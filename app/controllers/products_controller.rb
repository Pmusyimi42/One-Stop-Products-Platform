class ProductsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # skip_before_action :authorize, only: [:index, :show]
    # before_action :set_product, only: [:update, :destroy, :show]

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def show
        product = Product.find_by(id: params[:id])
        render json: product, status: :ok
    end

    def create 
        product = Product.create(product_params)
        render json: product, status: :created
    end

    def update 
        product = Product.find_by(id: params[:id])
        product.update!(product_params)
        render json: product, status: :accepted
    end

    def destroy 
        product = Product.find_by(id: params[:id])
        product.destroy 
        head :no_content
    end


    private

    def product_params
        params.permit(:id, :title, :description, :price, :imageUrl)
    end

    def render_not_found_response
        render json: { errors: ['Product Not Found'] }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end

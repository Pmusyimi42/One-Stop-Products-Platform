class ProductCategoriesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response



    def index
        render json: ProductCategory.all
      end
  
    def show
       admin = find_productcategory
       render json: admin, status: :ok
    end

    def update_product_categories
        product_id = params[:product_id]
        create_list = params[:create_list]
        delete_list = params[:delete_list]

        # create list
        if !create_list.empty?
            create_list.each {|id| ProductCategory.create(category_id: id, product_id: product_id)}
        end

        # delete list
        if !delete_list.empty?
            delete_list.each {|id| ProductCategory.destroy_by(category_id: id, product_id: product_id)}
        end

        product_categories = ProductCategory.filter_by_product(product_id)
        render json:  product_categories, status: :created
    end


    private

    def find_productcategory
        ProductCategory.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: ['Product Category Not Found'] }, status: :not_found
    end
end

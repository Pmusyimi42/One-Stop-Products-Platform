require "test_helper"

class AdminProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_product = admin_products(:one)
  end

  test "should get index" do
    get admin_products_url, as: :json
    assert_response :success
  end

  test "should create admin_product" do
    assert_difference('AdminProduct.count') do
      post admin_products_url, params: { admin_product: { admin_id: @admin_product.admin_id, product_id: @admin_product.product_id } }, as: :json
    end

    assert_response 201
  end

  test "should show admin_product" do
    get admin_product_url(@admin_product), as: :json
    assert_response :success
  end

  test "should update admin_product" do
    patch admin_product_url(@admin_product), params: { admin_product: { admin_id: @admin_product.admin_id, product_id: @admin_product.product_id } }, as: :json
    assert_response 200
  end

  test "should destroy admin_product" do
    assert_difference('AdminProduct.count', -1) do
      delete admin_product_url(@admin_product), as: :json
    end

    assert_response 204
  end
end

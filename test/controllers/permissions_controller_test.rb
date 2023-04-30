require "test_helper"

class PermissionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @permission = permissions(:one)
  end

  test "should get index" do
    get permissions_url, as: :json
    assert_response :success
  end

  test "should create permission" do
    assert_difference('Permission.count') do
      post permissions_url, params: { permission: { access: @permission.access, create: @permission.create, delete: @permission.delete, edit: @permission.edit, role: @permission.role, user_id: @permission.user_id, view: @permission.view } }, as: :json
    end

    assert_response 201
  end

  test "should show permission" do
    get permission_url(@permission), as: :json
    assert_response :success
  end

  test "should update permission" do
    patch permission_url(@permission), params: { permission: { access: @permission.access, create: @permission.create, delete: @permission.delete, edit: @permission.edit, role: @permission.role, user_id: @permission.user_id, view: @permission.view } }, as: :json
    assert_response 200
  end

  test "should destroy permission" do
    assert_difference('Permission.count', -1) do
      delete permission_url(@permission), as: :json
    end

    assert_response 204
  end
end

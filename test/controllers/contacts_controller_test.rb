require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test "should get all contacts" do
    get api_v1_contacts_path
    assert_response :ok

    body = JSON.parse(response.body)
    assert_equal 2, body.length
  end

  test "should get contact details" do
    get api_v1_contacts_path(contacts(:one).id)
    assert_response :ok
  end

  test "should return not found if no contact exists with given id" do
    get '/api/v1/contacts/27'
    assert_response :not_found
  end

  test "should create contact" do
    post api_v1_contacts_path,
      params: { first_name: "Syen", last_name: "Orogene", email: "syen@fulcrum.com", phone: "654321987" }
    assert_response :ok
  end

  test "cannot create contact if some params are missing" do
    post api_v1_contacts_path,
         params: { first_name: "Syen", email: "syen@fulcrum.com" }
    assert_response 422
  end

  test "cannot create contact if email already exists for another contact" do
    post api_v1_contacts_path,
         params: { first_name: "Essun", last_name: "Strongback", email: "syen@fulcrum.com", phone: "654321987" }
    assert_response :ok

    post api_v1_contacts_path,
         params: { first_name: "Syen", last_name: "Orogene", email: "syen@fulcrum.com", phone: "654321987" }
    assert_response 422
  end

end

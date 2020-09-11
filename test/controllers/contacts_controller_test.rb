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

end

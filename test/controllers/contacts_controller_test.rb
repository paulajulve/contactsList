require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test "should get all contacts" do
    get api_v1_contacts_path
    assert_response :ok

    body = JSON.parse(response.body)
    assert_equal 2, body.length
  end

end

require 'rails_helper'

RSpec.describe "Api::V1::Contacts", type: :request do

  fixtures :contacts

  it 'returns all contacts' do
    get '/api/v1/contacts/'

    expect(response.content_type).to eq("application/json")
    expect(response).to have_http_status(:ok)

    parsed_body = JSON.parse(response.body)
    expect(parsed_body.length).to eq(2)
  end

  it 'returns the requested contact' do
    syen_id = contacts(:syenite).id
    get "/api/v1/contacts/#{syen_id}"

    expect(response).to have_http_status(:ok)

    parsed_body = JSON.parse(response.body)
    expect(parsed_body["email"]).to eq("syenite@fulcrum.com")
  end

  it "should return not found if no contact exists for the requested id" do
    get '/api/v1/contacts/27'
    expect(response).to have_http_status(:not_found)
  end

  it 'creates a new contact' do
    contact = '{"first_name": "Essun", "last_name": "Commless", "email": "essun@nowhere.com", "phone": "789456123"}'

    post "/api/v1/contacts",
         :params => contact,
         :headers => { "CONTENT_TYPE" => "application/json" }

    expect(response).to have_http_status(:ok)

    parsed_body = JSON.parse(response.body)
    contact_id = parsed_body["id"]
    get "/api/v1/contacts/#{contact_id}"

    expect(response).to have_http_status(:ok)
    parsed_body = JSON.parse(response.body)
    parsed_contact = JSON.parse(contact)

    expect(parsed_body["email"]).to eq(parsed_contact["email"])
  end

  it "cannot create a contact if some params are missing" do
    post "/api/v1/contacts",
         params: '{ "first_name": "Syen", "email": "syen@fulcrum.com" }',
         :headers => { "CONTENT_TYPE" => "application/json" }

    expect(response).to have_http_status(422)
  end

  it "cannot create contact if the email already exists for another contact" do
    contact1 = '{"first_name": "Essun", "last_name": "Commless", "email": "essun@nowhere.com", "phone": "789456123"}'
    contact2 = '{"first_name": "Syen", "last_name": "Rock", "email": "essun@nowhere.com", "phone": "789456165"}'

    post "/api/v1/contacts",
         :params => contact1,
         :headers => { "CONTENT_TYPE" => "application/json" }
    expect(response).to have_http_status(:ok)

    post "/api/v1/contacts",
         :params => contact2,
         :headers => { "CONTENT_TYPE" => "application/json" }
    expect(response).to have_http_status(422)
  end

  it 'updates an existing contact changing only provided fields' do
    syen_id = contacts(:syenite).id
    new_data = '{"last_name": "Pirate", "email": "syenite@island.com"}'

    patch "/api/v1/contacts/#{syen_id}", :params => new_data, :headers => { "CONTENT_TYPE" => "application/json" }
    expect(response).to have_http_status(:no_content)

    get "/api/v1/contacts/#{syen_id}"
    expect(response).to have_http_status(:ok)
    parsed_body = JSON.parse(response.body)
    parsed_new_data = JSON.parse(new_data)

    expect(parsed_body["email"]).to eq(parsed_new_data["email"])
    expect(parsed_body["first_name"]).to eq(contacts(:syenite).first_name)
  end

  it "should return not found if trying to update a non unexisting contact" do
    new_data = '{"last_name": "Pirate", "email": "syenite@island.com"}'

    patch "/api/v1/contacts/9999999", :params => new_data, :headers => { "CONTENT_TYPE" => "application/json" }
    assert_response :not_found
  end

  it 'deletes requested contact' do
    schaffa_id = contacts(:schaffa).id

    delete "/api/v1/contacts/#{schaffa_id}", :headers => { "CONTENT_TYPE" => "application/json" }
    expect(response).to have_http_status(:no_content)

    get '/api/v1/contacts/'
    parsed_body = JSON.parse(response.body)
    expect(parsed_body.length).to eq(1)
  end

  it "should return not found if trying to delete a non existing contact" do

    delete "/api/v1/contacts/9999999", :headers => { "CONTENT_TYPE" => "application/json" }
    assert_response :not_found
  end
end

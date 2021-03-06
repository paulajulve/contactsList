require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  test "can create contact" do
    contact = Contact.new({
        first_name: "Syen",
        last_name: "Orogene",
        email: "syen@orogene.com",
        phone: "654654654"
    })

    assert contact.save
  end

  test "cannot create contacts with same email" do
    syen = Contact.new({
        first_name: "Syen",
        last_name: "Orogene",
        email: "orogene@fulcrum.com",
        phone: "654654654"
    })
    assert syen.save

    essun = Contact.new({
        first_name: "Essun",
        last_name: "Orogene",
        email: "orogene@fulcrum.com",
        phone: "654654654"
    })

    assert_not essun.save
    assert_equal({:error=>:taken, :value=>"orogene@fulcrum.com"}, essun.errors.details[:email][0])
  end

  test "cannot create empty contact" do
    contact = Contact.new

    assert_not contact.save
  end

  test "cannot create contact with invalid email" do
    contact = Contact.new({
       first_name: "Syen",
       last_name: "Orogene",
       email: "orogenefulcrum.com",
       phone: "654654654"
    })

    assert_not contact.save
    assert_equal({:error=>:invalid, :value=>"orogenefulcrum.com"}, contact.errors.details[:email][0])
  end

  test "cannot create contact with invalid phone" do
    contact = Contact.new({
       first_name: "Syen",
       last_name: "Orogene",
       email: "orogene@fulcrum.com",
       phone: "654"
    })

    assert_not contact.save
    assert_equal({:error=>:invalid, :value=>"654"}, contact.errors.details[:phone][0])
  end
end

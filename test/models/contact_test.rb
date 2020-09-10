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
  end

  test "cannot create empty contact" do
    contact = Contact.new

    assert_not contact.save
  end
end

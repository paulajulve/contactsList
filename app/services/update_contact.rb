class UpdateContact
  def self.execute(contact, contact_params)
    return contact.update(contact_params)
  end
end

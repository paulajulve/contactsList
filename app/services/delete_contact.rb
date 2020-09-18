class DeleteContact
  def self.execute(contact)
    return contact.destroy
  end
end

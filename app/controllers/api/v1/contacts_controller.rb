module Api
  module V1
    class ContactsController < ApplicationController
      def index
        @contacts = Contact.all
      end
    end
  end
end

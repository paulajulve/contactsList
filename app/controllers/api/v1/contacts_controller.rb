module Api
  module V1
    class ContactsController < ApplicationController
      def index
        @contacts = Contact.all
      end

      def show
        @contact = Contact.find_by(id: params[:id])

        head :not_found unless @contact
      end
    end
  end
end

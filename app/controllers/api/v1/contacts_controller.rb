module Api
  module V1
    class ContactsController < ApplicationController
      def index
        @contacts = Contact.all.order('first_name ASC')
      end

      def show
        @contact = Contact.find_by(id: params[:id])

        head :not_found unless @contact
      end

      def create
        @contact = Contact.new(contact_params)
        if @contact.save
          @contact
        else
          head 422
        end
      end

      def update
        @contact = Contact.find_by(id: params[:id])

        return head :not_found unless @contact

        if UpdateContact.execute(@contact, contact_params)
          head :no_content
        else
          head 422
        end
      end

      def destroy
        @contact = Contact.find_by(id: params[:id])

        return head :not_found unless @contact

        if DeleteContact.execute(@contact)
          head :no_content
        else
          head 422
        end
      end

      private

      def contact_params
        params.permit(:first_name, :last_name, :email, :phone)
      end
    end
  end
end

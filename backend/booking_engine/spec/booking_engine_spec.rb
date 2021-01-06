# frozen_string_literal: true

require "spec_helper"

RSpec.describe BookingEngine do
  subject(:booking_engine) { described_class.new }

  it "initializes an instance" do
    is_expected.to be_a(BookingEngine)
  end

  describe "RESERVATIONS" do
    subject { BookingEngine::RESERVATIONS }

    it "returns an array of confirmed reservations currently in the system" do
      # ...
    end
  end
end

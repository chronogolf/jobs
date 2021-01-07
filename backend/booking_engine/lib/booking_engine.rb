# frozen_string_literal: true

require "json"

class BookingEngine
  def self.all
    @all ||= JSON.parse File.read("#{__dir__}/reservations.json")
  end

  def self.create(attributes)
    # ...
  end

  def self.valid?
    # ...
  end
end

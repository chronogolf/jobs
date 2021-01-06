# frozen_string_literal: true

require "yaml"

class BookingEngine
  RESERVATIONS = YAML.load(File.read("./lib/reservation.yml")).shuffle
end

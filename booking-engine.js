/*
Running instructions:
1. Clone repo `chronogolf/jobs`
2. Checkout branch `booking-engine-js`
3. Run using `node jobs/booking-engine.js`

Challend:
1. We wish to create a reservation booking engine service that can book reservation for a golfer by name and time of day.
2. We want to extend the capability of the reservation engine to only allow reservations to be booked at 10 minute increments
3. Further, we wish to add the ability to updated existing reservations

Sample usage:
reservationService.addReservation({
    name: 'Tiger Woods',
    time: new Date(2021, 01, 01, 6, 30, 0)
})
*/

class ReservationService {
    constructor() {
    }

    getReservations() {
    }

    addReservation() {
    }

    updateReservation() {
    }

    cancelReservation() {
    }

    _isValidSlot() {
    }
}

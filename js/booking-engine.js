/*
Setup:
1. Pull the public GH repo jobs
2. Run using `node js/booking-engine.js`

Instructions:
1. Create a reservation booking engine service that can book reservation for a golfer by name and time of day (expecting candidate to use a JS class)
2. We want to extend the capability of the reservation engine to only allow reservations to be booked at 10 minute increments (expecting candidate to lookup epoch time + handle logic to check for 10 minute increments on the hour)
3. Further, we wish to add the ability to updated existing reservations (expecting candidate to define api contract with service here)

Sample usage:
reservationService.addReservation({
    name: 'Tiger Woods',
    time: new Date(2021, 01, 01, 6, 30, 0)
})
*/

class ReservationService {
    constructor() {
        this.reservations = [] // candidate might use a different data structure (eg. key - value object)
    }

    getReservations() {
        return this.reservations
    }

    addReservation(reservation) {
        if (this._isValidSlot(reservation.time)) {
            this.reservations.push(reservation)
        }
    }

    updateReservation(time, updatedReservation) {
        let index = this.reservations.findIndex(reservation => reservation.time.getTime() === time.getTime())
        if (this._isValidSlot(updatedReservation.time) && index > -1) {
            this.reservations[index] = updatedReservation
        }
    }

    cancelReservation(time) {
        let index = this.reservations.findIndex(reservation => reservation.time === time)
        this.reservations.splice(index, 1)
    }

    _isValidSlot(time) {
        return time.getMinutes() % 10 === 0 // time permitting, we can ask candidate to add check for colliding slots
    }

}

let reservationService = new ReservationService()

// valid reservation
reservationService.addReservation({
    name: 'Tiger Woods',
    time: new Date(2021, 01, 01, 6, 30, 0)
})
reservationService.addReservation({
    name: 'John Daly',
    time: new Date(2021, 01, 01, 6, 40, 0)
})

// invalid reservation (not at 10 minute interval)
reservationService.addReservation({
    name: 'Rory McIlroy',
    time: new Date(2021, 01, 01, 6, 42, 0)
})

// valid reservation update
reservationService.updateReservation(new Date(2021, 01, 01, 6, 40, 0), {
    name: 'John Daly',
    time: new Date(2021, 01, 01, 6, 50, 0)
})

// invalid reservation (no matching slot)
reservationService.updateReservation(new Date(2021, 01, 01, 6, 0, 0), {
    name: 'John Daly',
    time: new Date(2021, 01, 01, 6, 50, 0)
})
console.log(reservationService.getReservations())

// Further we can ask for testing conditions (time permitting)

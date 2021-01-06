![Chronogolf][crest]

# The Booking Engine challenge

Golf clubs manage player reservations through our system. When a player wants to
make a reservation, they request it through a booking engine. The system will
then confirm if the submitted reservation is valid.

Your mission consists of building a simple booking application that validates
and returns a list of confirmed reservations.

```ruby
class BookingEngine
end
```

**Step 0**

Get set up.

1. Clone the repo with the method of your choice (GitHub offers several options from the UI)
2. `cd` into your local copy of the project
3. From the terminal, run `bundle install` to install the dependencies
4. Still from the terminal, run `rspec` to run the test suite

**Step 1**

Oh no! Specs are failing. Looks like we have a bug.
Have a look and fix it.

**Step 2**

Now that you have access to the list of reservations, update the system to accept
new reservation request following the data structure in place.

Can you add a test to confirm that the system returns all reservations?

**Step 3**

As any other booking system, reservation must follow some business rules.
Update the system to validate new reservation request against these 2 rules:

- A minimum of 10 minutes between start times
- For a given player, each reservation must be at least 2 hours apart

The system should only accept valid requests.

Make sure specs remain green.

[crest]: https://cdn2.chronogolf.com/assets/logos/Github%20-%20Header.png

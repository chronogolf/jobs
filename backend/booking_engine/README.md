![Chronogolf][crest]

# The Booking Engine challenge

Golf clubs manage player reservations through our system. When a player wants to
make a reservation, they request it through a booking engine. The system will
then confirm if the submitted reservation is valid.

Your mission today consists of building a simple booking application that
validates and returns a list of confirmed reservations.

```ruby
class BookingEngine
end
```

**Step 0**

Let's get your setup to work.

1. Clone the repo with the method of your choice (GitHub offers several options from the UI)
2. `cd` into your local copy of the project
3. From the terminal, run `bundle install` to install the dependencies
4. Then, run `rspec` to run the test suite

**Step 1**

Oh no! Specs are failing. It looks like we have a bug.

Could you have a look and fix it?

**Step 2**

Now that you have access to the data let's change the system to return
reservations as objects. It looks like someone in the team created a test for
this already. Because TDD, right?

Can you change the code to make the test pass?

**Step 3**

To manage thousands of reservations, first we need a way to create new ones. Can
you add a method to add a new reservation? Again, a team member left a basic
example commented out for that.

Once you're done, can you write a new test to make sure the new reservation is
added to the system?

**Step 4**

As with any other booking system, reservations must follow some business rules.

Let's change the system to raise an error if reservations are not valid
according to these:

- Start times must be 10-minute intervals, i.e. 9:00a and 9:10 are valid, 9:03 is not.
- For any given player, their reservations must be at least 2 hours apart.

The system should only accept valid requests. Let's make sure we raise an error
if we try to add an invalid reservation.

Good luck and, let's go!

[crest]: https://cdn2.chronogolf.com/assets/logos/Github%20-%20Header.png

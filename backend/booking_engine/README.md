![Lightspeed Golf][crest]

# The Booking Engine challenge

## Intro to Building a Booking Engline

Golf clubs manage player reservations through our system. When a player wants to
make a reservation, they request it through a booking engine. The system will
then confirm if the submitted reservation is valid.

Your mission today consists of building a simple booking application that
validates reservation requests and returns a list of confirmed reservations.

<br/>

<hr/>

## Environment Setup

Let's take care of your setup first.

- Choose a dev environment and the language you're the most comfortable with
  - A dev environment on your personal computer is perfect!
  - [CodeInterview](http://codeinterview.io/) is also available if you would prefer an online editor
- Let's start pairing together!

<br/>

Example seed data for existing reservations:

```json
{"starts_at": "2020-02-01T06:00:00.000-05:00", "player": "Anna"},
{"starts_at": "2020-02-01T06:10:00.000-05:00", "player": "Mike"},
{"starts_at": "2020-02-01T06:20:00.000-05:00", "player": "Mary"}
```

<hr/>

## The Challenge

<br/>

### Step 1 - Create a new reservation

Before anything else, we want to be able to accept new bookings from players
Provide a method to create a new reservation

Example of a reservation:

```json
{ "starts_at": "2020-02-01T08:00:00.000-05:00", "player": "Anna" }
```

<br/>

### Step 2 - Validate reservations are 10 minutes apart

As with any other booking system, reservations must follow some business rules.
For our system, reservations must meet the following requirements:

- Start times must be at multiples of 10 minutes
- i.e. 9:00 and 9:10 are valid but 9:03 is invalid)

Example of a valid reservation:

```json
{ "starts_at": "2020-02-01T10:00:00.000-05:00", "player": "Anna" }
```

Example of an invalid reservation:

```json
{ "starts_at": "2020-02-01T06:25:00.000-05:00", "player": "John" }
```

<br/>

### Step 3 - Validate same-player reservations are 2 hours apart

Then we'd like to add another requirement:

- A player cannot book more than once within a 2 hours range

Example of a valid reservation:

```json
{ "starts_at": "2020-02-01T12:00:00.000-05:00", "player": "Anna" }
```

Example of an invalid reservation:

```json
{ "starts_at": "2020-02-01T07:10:00.000-05:00", "player": "Mike" }
```

<br/>

### Step 4 - API Design

Now that we have some battle-tested reservation logic,
how might we use this to build a REST API which allows players to book reservations?

<br/>

### Step 5 - Scalability

What considerations should we make if this reservation system needs to handle thousands of request per hour?

[crest]: https://cdn2.chronogolf.com/assets/logos/Github%20-%20Header.png

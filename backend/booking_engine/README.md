![Lightspeed Golf][crest]

# The Booking Engine challenge

## Intro to Building a Booking Engline
You can use this prompt to introduce the the challenge and explain a little about our app:
> Golf clubs manage player reservations through our system. When a player wants to
make a reservation, they request it through a booking engine. The system will
then confirm if the submitted reservation is valid.
>
> Your mission today consists of building a simple booking application that
validates reservation requests and returns a list of confirmed reservations.

</br>

As you interview, be mindful of the following things:

- Is the candidate a person we would enjoy working with?
- Is the candidate receptive to feedback?
- Did the candidate showcase any toxic or inappropriate behaviour?

---

## Environment Setup
You can use this prompt to align on what environment will be used for the challenge:
> Let's take care of your setup first.
> - Choose a dev environment and a language that suits you
>   - A dev environment on your personal computer is perfect!
>   - Coderpad is available if you would prefer
>   - Choose the language you are most comfortable with
> - Let's start pairing together!

</br>

Example seed data for existing reservations:
```json
{"starts_at": "2020-02-01T06:00:00.000-05:00", "player": "Anna"},
{"starts_at": "2020-02-01T06:10:00.000-05:00", "player": "Mike"},
{"starts_at": "2020-02-01T06:20:00.000-05:00", "player": "Mary"}
```

---
## The Challenge

</br>

### Step 1 - Create a new reservation
Prompt:
> Before anything else, we want to be able to accept new bookings from players
> Provide a method to create a new reservation

Example of a reservation: 
```json
{"starts_at": "2020-02-01T08:00:00.000-05:00", "player": "Anna"}
```

What we want to assess/think about:

- Is the candidate capable of asking relevant questions?
- Does the candidate have essential notions of OOP?
- Are they capable of focusing on a small scope and/or breaking down problems?

</br>

### Step 2 - Validate reservations are 10 minutes apart
Prompt:
> As with any other booking system, reservations must follow some business rules.
> For our system, reservations must meet the following requirements:
>
> - Start times must be at multiples of 10 minutes
>   - i.e. 9:00 and 9:10 are valid but 9:03 is invalid)

Example of a valid reservation:
```json
{"starts_at": "2020-02-01T10:00:00.000-05:00", "player": "Anna"}
```
Example of an invalid reservation:
```json
{"starts_at": "2020-02-01T06:25:00.000-05:00", "player": "John"}
```

What we want to assess/think about:

- Is the candidate able to build upon previous understanding and code?
- Is the candidate organizing their thoughts and code clearly?
- If they get "stuck", is the candidate able to research (google, asking the interviewer) in a productive way?

</br>

### Step 3 - Validate same-player reservations are 2 hours apart
Prompt:
> Then we'd like to add another requirement:
>
> - A player cannot book more than once within a 2 hours range

Example of a valid reservation: 
```json
{"starts_at": "2020-02-01T12:00:00.000-05:00", "player": "Anna"}
```
Example of an invalid reservation: 
```json
{"starts_at": "2020-02-01T07:10:00.000-05:00", "player": "Mike"}
```

What we want to assess/think about:

- Is the candidate able to search for core APIs behaviour?
- Has the candidate introduced regressions at this stage of the challege that you can maneuver them to address?
- Have you discussed testing or has the candidate outlined some test cases?

</br>

### Step 4 - API Design
Prompt:
> Now that we have some battle-tested reservation logic,
how might we use this to build a REST API which allows players to book reservations?

What we want to assess/think about:

- Can the candidate design simple systems?
- Does the candidate have previous experience with building APIs?

</br>

### Step 5 - Scalability
Prompt:
> What considerations should we make if this reservation system needs to handle thousands of request per hour?

What we want to assess/think about:

- Can the candidate think about more advanced architectural concerns?
- Does the candidate have previous experience in scalability?
  OR
- Is the candidate asking relevant questions to try to formulate an answer to a complex problem they don't know yet?

[crest]: https://cdn2.chronogolf.com/assets/logos/Github%20-%20Header.png

<div style="text-align: center;">
  <a href="https://event.impactbyte.com">
    <h1>
      <img src="./brand/logo/eventbyte.png" alt="EventByte Logo">
    </h1>
  </a>
</div>

# EventByte Design

EventByte is an event aggregator of any technical events or meetups.

EventByte's mission is to help educate people through technology to move humanity forward. By guiding aspiring technologists through various gatherings and events around the world.

- Official: https://eventbyte.co
- Subdomain: https://event.impactbyte.com
- Redirect: https://mhaidarhanif.com/event
- Prototype: https://invis.io/SAEFR7BRQ

--------------------------------------------------------------------------------

## Features

- Welcome onboarding
- See list of events
- Authentication
  - Sign up as a new user with confirmation email
  - Sign in as an existing user
  - Sign out
  - Forgot password via email
- Registered user actions
  - Post a new event
    - Fill the information about the URL, title/name, description, location, date and time
  - Update and delete a posted event
  - Star an event

--------------------------------------------------------------------------------

## Inspirations

- https://facebook.com/events
- https://eventbrite.com
- https://meetup.com
- https://seputarevent.com
- https://producthunt.com

--------------------------------------------------------------------------------

## Pages

- [x] Welcome
- [x] Home
- [x] Sign Up
- [x] Sign In
- [x] Sign Out
- [x] User Profile
- [x] New Event
- [x] Single Event
  - [ ] User Join Event
  - [ ] User Discuss in Event
- [x] Search
  - [x] Title
  - [ ] Topic
  - [ ] Location
  - [ ] Date
- [ ] Calendar View

--------------------------------------------------------------------------------

## Example URLs

- [x] https://eventbyte.co
- [x] https://eventbyte.co/signup
- [x] https://eventbyte.co/signin
- [x] https://eventbyte.co/signout
- [ ] https://eventbyte.co/verify
- [ ] https://eventbyte.co/verify?token=ABCDEFGH
- [ ] https://eventbyte.co/reset
- [ ] https://eventbyte.co/reset?token=ABCDEFGH
- [x] https://eventbyte.co/profile/mhaidarhanif
- [x] https://eventbyte.co/profile/impactbyte
- [x] https://eventbyte.co/new
- [ ] https://eventbyte.co/featured
- [x] https://eventbyte.co/event/12345678
- [x] https://eventbyte.co/event/impactbyte-hackathon-premiere
- [x] https://eventbyte.co/search?title=hackathon
- [ ] https://eventbyte.co/search?topic=technology
- [ ] https://eventbyte.co/search?location=jakarta
- [ ] https://eventbyte.co/search?date=2017-11

--------------------------------------------------------------------------------

## Example APIs

- [x] https://eventbyte.co/auth `GET`
  - [x] https://eventbyte.co/auth/signup `POST`
  - [x] https://eventbyte.co/auth/signin `POST`
  - [x] https://eventbyte.co/auth/signout `POST`
  - [x] https://eventbyte.co/auth/is-admin `GET`
  - [x] https://eventbyte.co/auth/is-with-token `GET`
  - [x] https://eventbyte.co/auth/is-authenticated `GET`
  - [x] https://eventbyte.co/auth/is-authorized `GET`
- [x] https://eventbyte.co/api/users `GET`, `POST`, `DELETE`
  - [x] https://eventbyte.co/api/users/id/123 `GET`, `PUT`, `DELETE`
  - [x] https://eventbyte.co/api/users/id/123/events `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/users/slug/mhaidarhanif `GET`, `PUT`, `DELETE`
- [x] https://eventbyte.co/api/events `GET`, `POST`, `DELETE`
  - [x] https://eventbyte.co/api/events/id/123 `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/events/slug/impactbyte-hackathon-premiere `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/events/id/123/participants `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/events/id/123/discussions `GET`, `POST`, `PUT`, `DELETE`
- [x] https://eventbyte.co/api/topics `GET`, `POST`, `DELETE`
  - [x] https://eventbyte.co/api/topics/123 `GET`, `POST`, `PUT`, `DELETE`
- [x] https://eventbyte.co/api/search `GET`
  - [x] https://eventbyte.co/api/search?title=hackathon `GET`

--------------------------------------------------------------------------------

## Models

### [User](./models/user)
### [Event](./models/event)

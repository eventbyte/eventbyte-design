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
  - [ ] Category
  - [ ] Topic
  - [ ] Location
  - [ ] Date

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
- [x] https://eventbyte.co/user/12345678
- [x] https://eventbyte.co/mhaidarhanif
- [x] https://eventbyte.co/impactbyte
- [x] https://eventbyte.co/new
- [ ] https://eventbyte.co/featured
- [x] https://eventbyte.co/event/12345678
- [x] https://eventbyte.co/event/impactbyte-hackathon-premiere
- [x] https://eventbyte.co/search?title=hackathon
- [ ] https://eventbyte.co/search?category=technology
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
  - [x] https://eventbyte.co/api/users/123 `GET`, `POST`, `PUT`, `DELETE`
  - [x] https://eventbyte.co/api/users/mhaidarhanif `GET`, `POST`, `PUT`, `DELETE`
- [x] https://eventbyte.co/api/events `GET`, `POST`, `DELETE`
  - [x] https://eventbyte.co/api/events/123 `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/events/123/participants `GET`, `POST`, `PUT`, `DELETE`
  - [ ] https://eventbyte.co/api/events/123/discussions `GET`, `POST`, `PUT`, `DELETE`
- [x] https://eventbyte.co/api/search `GET`
  - [x] https://eventbyte.co/api/search?title=hackathon `GET`

--------------------------------------------------------------------------------

## Models

### User

```js
{
  _id: ObjectId(),
  id: 2,
  email: "me@mhaidarhanif.com", // required, validate: email
  password: "3ncrypt3d", // required
  hash: "3ncrypt3d", // required
  salt: "s41t", // required
  name: "M Haidar Hanif", // required
  username: "mhaidarhanif", // required
  meta: {
    visible: true, // required, default: true
    verified: true, // required, default: false
    flagged: false, // required, default: false
    classification: "person", // required, default: person
    roles: [ "admin", "regular" ], // required, default: regular
    membership: "free", // required, default: free
    badges: [ "innovator", "early-adopter" ] // later
    experience: 1000, // later
    level: 10 // later
    token: {
      auth: "ABCDEFGH" // optional
      verify: "ABCDEFGH" // optional
      reset: "ABCDEFGH" // optional
    }
  },
  profile: {
    gravatar: "https://en.gravatar.com/userimage/13324518/b1559a0310a452e00c09eeb24465d0a3?size=200", // optional
    title: "Educator of Impact Byte", // optional
    gender: "male", // optional
    phone: "+62-878-8055-1650", // optional
    birthDate: ISODate("1993-05-23T00:00:00.000Z"), // optional
    age: 23 // optional
  },
  links: {
    website: "https://mhaidarhanif.com", // optional
    facebook: "https://facebook.com/mhaidarhanif", // optional
    linkedin: "https://linkedin.com/in/mhaidarhanif", // optional
    twitter: "https://twitter.com/mhaidarh", // optional
    googleplus: "https://google.com/+MHaidarHanif" // optional
    github: "https://github.com/mhaidarh" // optional
  },
  events: [ // optional
    ObjectId(),
    ObjectId(),
    ObjectId()
  ],
  url: {
    plain: "https://eventbyte.co/user/2", // optional
    vanity: "https://eventbyte.co/mhaidarhanif" // optional
  },
  createdAt: ISODate(), // timestamp
  updatedAt: ISODate() // timestamp
}
```

### Event

```js
{
  _id: ObjectId(), // unique
  id: 1, // unique
  submitter: ObjectId(), // User
  origin: {
    image: "https://meetup.com/ImpactByte/events/12345678/cover.jpg", // optional
    url: "https://meetup.com/ImpactByte/events/12345678", // required
    site: "Meetup" // optional
  },
  title: "Impact Byte Hackathon Premiere", // required
  description: "All fun of premier hackathon for the first timer developers.", // optional
  image: "https://website.com/impactbyte-hackathon-premiere.jpg", // optional
  meta: {
    visible: true, // required
    verified: true, // required
    flagged: false // required
    priceMin: 0, // optional
    priceMax: 0, // optional
    currency: "IDR", // optional
    categories: [ "Competition" ], // optional
    topics: [ "Science", "Technology", "Software", "Developer", "Hackathon" ], // optional
  },
  schedule: {
    dateStart: ISODate(), // required
    dateEnd: ISODate(), // optional
    timezone: "GMT+7" // optional
  },
  location: {
    method: [ "Onsite" ], // required
    detail: "Impact Hub Jakarta, Kemang", // optional
    city: "Jakarta", // optional
    country: "Indonesia", // optional
    map: "https://goo.gl/maps/2Frvba3Nrp82" // optional
  },
  stars: [ // optional
    ObjectId(), // User
    ObjectId(), // User
    ObjectId() // User
  ],
  participants: [], // later
  discussions: [] // later
  sponsored: {
    status: true, // optional
    dateStart: ISODate(), // optional
    dateEnd: ISODate() // optional
  },
  url: {
    plain: "https://eventbyte.co/event/1" // optional
    vanity: "https://eventbyte.co/event/impactbyte-hackathon-premiere" // optional
  },
  createdAt: ISODate(), // timestamp
  updatedAt: ISODate() // timestamp
}
```

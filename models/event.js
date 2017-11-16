const event = {
  _id: ObjectId(), // unique
  id: 1, // unique
  submitter: ObjectId(), // User
  origin: {
    image: "https://meetup.com/ImpactByte/events/12345678/cover.jpg", // optional
    url: "https://meetup.com/ImpactByte/events/12345678", // required
    site: "Meetup", // optional
    organizer: ["Impact Byte"] // optional
  },
  title: "Impact Byte Hackathon Premiere", // required
  description: "All fun of premier hackathon for the first timer developers.", // optional
  image: "https://website.com/impactbyte-hackathon-premiere.jpg", // optional
  meta: {
    visible: true, // required
    verified: true, // required
    flagged: false // required
  },
  price: {
    min: 0, // optional
    max: 0, // optional
    currency: "IDR" // optional
  },
  topics: [
    ObjectId() // Topic
  ],
  schedule: {
    start: ISODate(), // required
    end: ISODate(), // optional
    timezone: "GMT+7" // optional
  },
  location: {
    method: ["Onsite"], // required
    address: "Impact Hub Jakarta, Kemang", // optional
    city: "Jakarta", // optional
    country: "Indonesia", // optional
    map: "https://goo.gl/maps/2Frvba3Nrp82" // optional
  },
  savedBy: [
    ObjectId() // User
  ],
  joinedBy: [], // later
  discussedBy: [], // later
  sponsored: {
    status: true, // optional
    start: ISODate(), // optional
    end: ISODate() // optional
  },
  url: {
    plain: "https://eventbyte.co/event/1", // optional
    vanity: "https://eventbyte.co/event/impactbyte-hackathon-premiere" // optional
  },
  createdAt: ISODate(), // timestamp
  createdBy: ObjectId(), // timestamp
  updatedAt: ISODate(), // timestamp
  updatedBy: ObjectId(), // timestamp
  deletedAt: ISODate(), // timestamp
  deletedBy: ObjectId() // timestamp
}

const event = {
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
    flagged: false, // required
    priceMin: 0, // optional
    priceMax: 0, // optional
    currency: "IDR", // optional
    topics: [
      "Competition",
      "Science",
      "Technology",
      "Software",
      "Developer",
      "Hackathon"
    ] // optional
  },
  schedule: {
    dateStart: ISODate(), // required
    dateEnd: ISODate(), // optional
    timezone: "GMT+7" // optional
  },
  location: {
    method: ["Onsite"], // required
    detail: "Impact Hub Jakarta, Kemang", // optional
    city: "Jakarta", // optional
    country: "Indonesia", // optional
    map: "https://goo.gl/maps/2Frvba3Nrp82" // optional
  },
  savedBy: [
    // User
    ObjectId(),
    ObjectId(),
    ObjectId()
  ],
  joinedBy: [], // later
  discussedBy: [], // later
  sponsored: {
    status: true, // optional
    dateStart: ISODate(), // optional
    dateEnd: ISODate() // optional
  },
  url: {
    plain: "https://eventbyte.co/event/1", // optional
    vanity: "https://eventbyte.co/event/impactbyte-hackathon-premiere" // optional
  },
  createdAt: ISODate(), // timestamp
  updatedAt: ISODate() // timestamp
}

const event = {
  _id: ObjectId(), // unique
  id: 1, // unique
  submitter: ObjectId(), // User
  title: "Competition", // required
  description: "Competition for who want to win",
  meta: {
    visible: true, // required
    flagged: false // required
  },
  url: {
    plain: "https://eventbyte.co/topic/1", // optional
    vanity: "https://eventbyte.co/topic/competition" // optional
  },
  createdAt: ISODate(), // timestamp
  createdBy: ObjectId(), // timestamp
  updatedAt: ISODate(), // timestamp
  updatedBy: ObjectId(), // timestamp
  deletedAt: ISODate(), // timestamp
  deletedBy: ObjectId() // timestamp
}

const user = {
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
    roles: ["admin", "regular"], // required, default: regular
    membership: "free", // required, default: free
    badges: ["innovator", "early-adopter"], // later
    experience: 1000, // later
    level: 10 // later
  },
  profile: {
    gravatar: `https://en.gravatar.com/userimage/13324518/b1559a0310a452e00c09eeb24465d0a3?size=200`, // optional
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
    googleplus: "https://google.com/+MHaidarHanif", // optional
    github: "https://github.com/mhaidarh" // optional
  },
  token: {
    auth: "ABCDEFGH", // optional
    verify: "ABCDEFGH", // optional
    reset: "ABCDEFGH" // optional
  },
  events: {
    submitted: [
      ObjectId() // Event
    ],
    saved: [
      ObjectId() // Event
    ]
  },
  topics: {
    submitted: [
      ObjectId() // Topic
    ],
    saved: [
      ObjectId() // Topic
    ]
  },
  url: {
    plain: "https://eventbyte.co/user/2", // optional
    vanity: "https://eventbyte.co/mhaidarhanif" // optional
  },
  createdAt: ISODate(), // timestamp
  createdBy: ObjectId(), // timestamp
  updatedAt: ISODate(), // timestamp
  updatedBy: ObjectId(), // timestamp
  deletedAt: ISODate(), // timestamp
  deletedBy: ObjectId() // timestamp
}

module.exports = {
  api_url: process.env.API_URL || "/api",
  port: process.env.PORT || 3001,
  db: {
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/unittesting",
  },
};

require("dotenv").config();

const app = require("./src/app");
const { connectDB } = require("./src/config/db");
const { PORT } = require("./src/config/env");
const logger = require("./src/utils/logger");

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT} (${process.env.NODE_ENV})`);
  });
};

startServer();

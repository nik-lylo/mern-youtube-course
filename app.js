const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const PORT = config.get("port") || 5000;

const app = express();
app.use(express.json({ extended: true }));
app.use("/api/auth", require("./router/auth.routes"));
app.use("/api/link", require("./router/link.routes"));
app.use("/t", require("./router/redirect.routes"));
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
    });
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}....`)
    );
  } catch (e) {
    console.log("Error start", e.message);
  }
}
start();

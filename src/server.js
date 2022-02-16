require("dotenv").config();
const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const admin = require("./routes/admin");
const video = require("./routes/video");
const user = require("./routes/user");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", auth);
app.use("/api/v1/admin", admin);
app.use("/api/v1/videos", video);
app.use("/api/v1/users", user);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));

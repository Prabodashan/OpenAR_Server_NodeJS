// ----------Third-party libraries and modules----------
const express = require("express");
const cors = require("cors");
require("dotenv/config");

// ----------Custom libraries and modules----------
const Configs = require("./configs");
const { ConnectDatabase } = require("./api/v1/helpers");
const {
  UserRoutes,
  UserTokenRoutes,
  CollectionRoutes,
} = require("./api/v1/routes");

// ----------Global instances----------
const app = express();
const PORT = Configs.DEV_PORT || 3308;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// ----------Common middleware----------
app.use(cors(corsOptions));
// Accept json
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.status(200).json({ success: { message: `Welcome to the server!` } });
});

// User route
app.use("/api/users", UserRoutes);

// User token route
app.use("/api/usertokens", UserTokenRoutes);

// User token route
app.use("/api/collection", CollectionRoutes);

// Error route
app.use((req, res) => {
  res.status(404).json({ error: { message: `Not found!` } });
});

// ----------Initialize the connection----------
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);

  // Initialize the db connection
  ConnectDatabase()
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.log(err));
});

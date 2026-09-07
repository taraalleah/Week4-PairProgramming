const express = require("express");
const TourRouter = require("./routes/tourRouter.js");
const app = express();

app.use(express.json());
app.use("/tours", TourRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
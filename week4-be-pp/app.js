const express = require("express");
const TourRouter = require("./routes/tourRouter.js");
const UserRouter = require("./routes/userRouter.js");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny")); 


app.use(express.json());
app.use("/tours", TourRouter);
app.use("/users", UserRouter);
//IT WORKS!!!!!!!!!
const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
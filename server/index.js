const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(
  `mongodb+srv://graphQLPracticeUser:j71p7z32Rfzb2Ris@cluster0.0om44.mongodb.net/graphQLPractice?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, //or next line
    // schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening from port 4000!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

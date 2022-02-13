const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  `mongodb+srv://mydbuser:4vVAbtPAEIF8oKjQ@cluster0.sjr78.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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

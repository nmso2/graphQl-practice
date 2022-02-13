const express = require("express");

const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

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

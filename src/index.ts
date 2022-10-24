import express from "express";
import routes from "./router";

const HOST = "localhost";
const PORT = 3000;
const app = express();

app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});

export default app;

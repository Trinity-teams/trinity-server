import express from "express";
import { exec } from "child_process";

const app = express();

const port = process.env.PORT || 3001;

const uiPath = ""

//build the UI
exec(`cd ${uiPath} && npm run build`);

//serve the UI
app.use(express.static(`${uiPath}/build`));

//serve the API
setTimeout(() => {
  app.listen(port, () => {
    console.log("trinity project is listening on port http://localhost:" + port);
  });
}, 5000);

//TODO: on init project in react app
// - react fetch to get all the data from files and schemas for build front end

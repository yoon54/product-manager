const express = require("express");
const port = 8000;
const cors = require("cors");
const app = express();
const db_name = "productsdb";

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./config/routes")(app);

app.get("/test", (req,res) => res.json({mesg: "its working!"}));

app.listen(port, () => console.log(`listening on port${port}`));
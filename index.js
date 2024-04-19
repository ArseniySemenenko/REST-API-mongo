const express = require("express");
const app = express();
const fs = require("fs");

//routes
const UserRoute = require("./Routes/users.route");

const PORT = 8000;

//log every request to server.log
app.use((req, res, next) => {
    const now = new Date().toString().slice(4,24);
    const data = `url: "${req.url}", method: "${req.method}", date: "${now}"`;
    console.log(data);
    try {
        fs.appendFileSync("server.log", data + "\n");
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
    next();
});

//json parser
app.use(express.json());
//add routes
app.use(UserRoute);

app.listen(PORT , () => {
    console.log(`Server started in http://localhost:${PORT}`);
})
